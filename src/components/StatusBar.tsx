import { useTheme } from 'react-native-paper'
import { StatusBar as RNStatusBar } from 'react-native'

export const StatusBar = () => {
  const { colors } = useTheme()

  return (
    <RNStatusBar barStyle='dark-content' backgroundColor={colors.background} />
  )
}
