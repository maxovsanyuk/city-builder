import { useEffect, useRef, useState } from 'react'

export default function useComponentVisible() {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false)
  const ref = useRef<HTMLHeadingElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLHeadingElement)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isComponentVisible, setIsComponentVisible }
}
