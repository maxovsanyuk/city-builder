import { $setAdvertisement } from 'entities/model/advertisement/model'

export const useAdvertisement = ({ advertisement }: Record<string, any>) => {
  const setCurrentAdvertisement = () => {
    $setAdvertisement(advertisement)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { setCurrentAdvertisement }
}
