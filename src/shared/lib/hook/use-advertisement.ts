import { $setAdvertisement } from '../../../features/advertisement-card/model/advertisement'

export const useAdvertisement = ({ advertisement, smoothScroll }: Record<string, any>) => {
  const setCurrentAdvertisement = () => {
    window.scrollTo({ top: 0, behavior: smoothScroll && 'smooth' })
    $setAdvertisement(advertisement)
  }

  return { setCurrentAdvertisement }
}
