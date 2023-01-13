import { MD3LightTheme, adaptNavigationTheme } from 'react-native-paper'
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native'

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
})

export const DefaultTheme = {
  ...LightTheme,
  ...MD3LightTheme,
  colors: {
    ...LightTheme.colors,
    ...MD3LightTheme.colors,
  },
}
