import SearchIcon from '@material-ui/icons/Search'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { StyledForm } from './styles'
import { useForm, Controller } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import { historyPush } from 'shared/services/navigation'
import { AutocompleteInput, GoogleMapsLocationsInput } from 'shared/ui/molecules'

export const SearchForm = () => {
  const { handleSubmit, register, watch, setValue, control } = useForm<Record<string, any>>()
  const { formatMessage } = useIntl()

  const onSubmit = handleSubmit((data: any, e: any) => {
    if (!data.location && data.category && !data?.advertisement) {
      historyPush(`/country/category/${data.category.trim()}`)
    } else if (data.location && !data.category && !data?.advertisement) {
      const locationId = data.location.split(' ')[0].replace(',', '').toLowerCase()
      historyPush(`/location/${locationId}`)
    } else if (data.location && data.category && !data?.advertisement) {
      const locationId = data.location.split(' ')[0].replace(',', '').toLowerCase()
      historyPush(`/location/${locationId}/category/${data.category.trim()}`)
    } else if (!data.location && !data.category && data?.advertisement) {
      historyPush(`/advertisement/${data?.advertisement}`)
    } else if (!data.location && data.category && data?.advertisement) {
      historyPush(`/country/category/${data.category.trim()}/advertisement/${data?.advertisement}`)
    } else if (data.location && !data.category && data?.advertisement) {
      const locationId = data.location.split(' ')[0].replace(',', '').toLowerCase()
      historyPush(`/country/location/${locationId}/advertisement/${data?.advertisement}`)
    } else if (data?.location && data?.category && data?.advertisement) {
      const locationId = data.location.split(' ')[0].replace(',', '').toLowerCase()
      historyPush(
        `/country/category/${data.category.trim()}/location/${locationId}/advertisement/${data?.advertisement}`
      )
    }

    e?.target.reset()
  })

  const category = watch('category')
  const location = watch('location')
  const advertisement = watch('advertisement')

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [category, location, advertisement])

  const categoryOptions = [
    { fmId: 'bars', id: nanoid() },
    { fmId: 'cafeterias', id: nanoid() },
    { fmId: 'coffee shops', id: nanoid() },
    { fmId: 'food courts', id: nanoid() },
    { fmId: 'pubs', id: nanoid() },
    { fmId: 'bookshop', id: nanoid() },
    { fmId: 'supermarket', id: nanoid() },
    { fmId: 'butcher’s', id: nanoid() },
    { fmId: 'stationers', id: nanoid() },
    { fmId: 'fish shop', id: nanoid() },
    { fmId: 'schools', id: nanoid() },
    { fmId: 'science Lab', id: nanoid() },
    { fmId: 'school campuses', id: nanoid() },
  ]

  return (
    <StyledForm onSubmit={onSubmit}>
      <div className="advertisements-wrapper">
        <Controller
          name="advertisement"
          control={control}
          render={({ field }) => (
            <TextField
              label={formatMessage({ id: 'search.advertisements' })}
              className="advertisement-input"
              variant="outlined"
              {...field}
            />
          )}
        />
      </div>

      <AutocompleteInput
        register={register}
        name="category"
        fmId="category"
        options={categoryOptions}
        className="category-search-input"
        setValue={setValue}
      />

      <GoogleMapsLocationsInput register={register} />

      <div className="submit-btn-box">
        <Button
          disabled={!category && !location && !advertisement}
          variant="contained"
          color="inherit"
          className="submit-btn"
          type="submit"
          endIcon={<SearchIcon />}
        >
          {formatMessage({ id: 'search' })}
        </Button>
      </div>
    </StyledForm>
  )
}
