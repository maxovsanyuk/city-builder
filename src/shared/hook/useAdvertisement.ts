import { $setAdvertisement } from '../../features/Common/model/Advertisement/model'

export const useAdvertisement = ({ advertisement }: Record<string, any>) => {
  console.log(advertisement, 'advertisement')

  const scrollToTop = () => {
    const content = document.getElementById('content')
    content && content.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const setCurrentAdvertisement = () => {
    $setAdvertisement(advertisement)
    scrollToTop()
  }

  return { scrollToTop, setCurrentAdvertisement }
}
