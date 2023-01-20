import { RouteProp, useRoute as useNativeRoute } from '@react-navigation/native'

export const useRoute = <Screen extends keyof RootStackParamList>() => {
  return useNativeRoute<RouteProp<RootStackParamList, Screen>>()
}
