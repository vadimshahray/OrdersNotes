import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export const useScreenTitle = (title: string) => {
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({ title })
  }, [title, setOptions])
}
