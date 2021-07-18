import { useEffect, useMemo, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import parse from 'autosuggest-highlight/parse'
import throttle from 'lodash/throttle'

import { TextField, Typography, Grid } from '@material-ui/core'
import Autocomplete from '@material-ui/core/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import LocationOnIcon from '@material-ui/icons/LocationOn'

function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) {
    return
  }

  const script = document.createElement('script')
  script.setAttribute('async', '')
  script.setAttribute('id', id)
  script.src = src
  position.appendChild(script)
}

const autocompleteService = { current: null }

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}))

interface MainTextMatchedSubstrings {
  offset: number
  length: number
}
interface StructuredFormatting {
  main_text: string
  secondary_text: string
  main_text_matched_substrings: readonly MainTextMatchedSubstrings[]
}
interface PlaceType {
  description: string
  structured_formatting: StructuredFormatting
}

const GoogleMapsLocationsInput = ({ register, required, style }: Record<string, any>) => {
  const classes = useStyles()
  const [value, setValue] = useState<PlaceType | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState<readonly PlaceType[]>([])
  const loaded = useRef(false)
  const { formatMessage } = useIntl()

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBK1naQDh375d6Z_wttEy9--jbPR3irq7w&libraries=places',
        document.querySelector('head'),
        'google-maps'
      )
    }

    loaded.current = true
  }

  const fetch = useMemo(
    () =>
      throttle((request: { input: string }, callback: (results?: readonly PlaceType[]) => void) => {
        return (autocompleteService.current as any).getPlacePredictions(request, callback)
      }, 200),
    []
  )

  useEffect(() => {
    let active = true

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (window as any).google.maps.places.AutocompleteService()
    }
    if (!autocompleteService.current) {
      return undefined
    }

    if (inputValue === '') {
      setOptions(value ? [value] : [])
      return undefined
    }

    fetch({ input: inputValue }, (results?: readonly PlaceType[]) => {
      if (active) {
        let newOptions: readonly PlaceType[] = []

        if (value) {
          newOptions = [value]
        }

        if (results) {
          newOptions = [...newOptions, ...results]
        }

        setOptions(newOptions)
      }
    })

    return () => {
      active = false
    }
  }, [value, inputValue, fetch])

  return (
    <Autocomplete
      style={style}
      className="location-search-input"
      getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
      filterOptions={x => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event: any, newValue: PlaceType | null) => {
        setOptions(newValue ? [newValue, ...options] : options)
        setValue(newValue)
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      renderInput={params => (
        <TextField
          {...params}
          label={formatMessage({ id: 'add.location' })}
          fullWidth
          placeholder="Warsaw"
          {...register('location', {
            required,
          })}
        />
      )}
      renderOption={(props, option) => {
        const matches = option.structured_formatting.main_text_matched_substrings
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [match.offset, match.offset + match.length])
        )

        return (
          <li {...props}>
            <Grid container alignItems="center">
              <Grid item>
                <LocationOnIcon className={classes.icon} />
              </Grid>
              <Grid item xs>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
                <Typography variant="body2" color="text.secondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        )
      }}
    />
  )
}

export default GoogleMapsLocationsInput
