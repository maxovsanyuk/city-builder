import CitizenIcon from 'shared/assets/icons/citizen.png'
import EntrepreneurIcon from 'shared/assets/icons/businessman.png'

export const defineAdvertisementTypeIcon = (type: string | undefined) => {
  switch (type) {
    case 'citizen':
      return CitizenIcon
    case 'entrepreneur':
      return EntrepreneurIcon

    default:
      return ''
  }
}
