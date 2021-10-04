import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import Autocomplete from '@material-ui/core/Autocomplete'
import { useIntl } from 'react-intl'
import { TextField } from '@material-ui/core'

export const AutocompleteInput = ({
  register,
  setValue,
  name,
  options,
  style,
  className,
  required,
  fmId,
}: Record<string, any>) => {
  const { formatMessage } = useIntl()

  return (
    <Autocomplete
      className={className}
      options={options}
      style={{ margin: 0, ...style }}
      onInputChange={(event, newInputValue) => setValue(name, newInputValue)}
      getOptionLabel={(option: Record<string, any>) => formatMessage({ id: option.fmId })}
      renderInput={(params: Record<string, any>) => (
        <TextField {...params} label={formatMessage({ id: fmId })} required={required} {...register(name)} />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.fmId, inputValue)
        const parts = parse(formatMessage({ id: option.fmId }), matches)

        return (
          <li {...props}>
            <div>
              {parts.map((part: Record<string, any>) => (
                <span
                  key={part.text}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {formatMessage({ id: part.text })}
                </span>
              ))}
            </div>
          </li>
        )
      }}
    />
  )
}
