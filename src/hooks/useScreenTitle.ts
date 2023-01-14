import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useScreenTitle = (title: string) => {
  const { setOptions } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    setOptions({ title })
  }, [title, setOptions])
}
