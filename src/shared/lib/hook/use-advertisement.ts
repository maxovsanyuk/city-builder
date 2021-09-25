import { $setAdvertisement } from 'entities/model/advertisement/model'

export const useAdvertisement = ({ advertisement }: Record<string, any>) => {
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
