import { useNavigation as useNativeNavigation } from '@react-navigation/native'

export const useNavigation = () => {
  return useNativeNavigation<AppNavigation>()
}
