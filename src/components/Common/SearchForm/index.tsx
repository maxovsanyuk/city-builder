import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AutocompleteInput from '../AutocomplateInpyt'
import GoogleMapsLocationsInput from '../GooglemapsLocationsInput'
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const SearchForm = () => {
  const { handleSubmit, register, watch, setValue } = useForm<Record<string, any>>()

  // const dispatch = useDispatch()
  const { formatMessage } = useIntl()
  const history = useHistory()

  const onSubmit = handleSubmit((data: any) => {
    if (!data.location && data.category) {
      const categoryId = parseInt(data.category.replace('Category', '').trim())
      history.push(`/country/category/${categoryId}`)
    } else if (data.location && !data.category) {
      const locationId = data.location.split(' ')[0].replace(',', '').toLowerCase()
      history.push(`/location/${locationId}`)
    } else if (data.location && data.category) {
      const categoryId = parseInt(data.category.replace('Category', '').trim())
      const locationId = data.location.split(' ')[0].replace(',', '').toLowerCase()
      history.push(`/location/${locationId}/category/${categoryId}`)
    }
  })

  const category = watch('category')
  const location = watch('location')

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [category, location])

  const categoryOptions = [
    { fmId: 'category.1', id: 19924 },
    { fmId: 'category.2', id: 55924 },
    { fmId: 'category.3', id: 14324 },
    { fmId: 'category.4', id: 12424 },
    { fmId: 'category.5', id: 11124 },
  ]

  return (
    <form onSubmit={onSubmit}>
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
          disabled={!category && !location}
          variant="contained"
          color="inherit"
          className="submit-btn"
          type="submit"
          endIcon={<SearchIcon />}
        >
          {formatMessage({ id: 'search' })}
        </Button>
      </div>
    </form>
  )
}

export default SearchForm
