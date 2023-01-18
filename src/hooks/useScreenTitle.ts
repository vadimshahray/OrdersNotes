import { useEffect } from 'react'
import { useNavigation } from '@hooks'

export const useScreenTitle = (title: string) => {
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({ title })
  }, [title, setOptions])
}
