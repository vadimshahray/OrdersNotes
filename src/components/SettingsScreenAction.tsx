import { Appbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const SettingsScreenAction = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handlePress = () => {
    navigate('SettingsScreen')
  }

  return <Appbar.Action icon='cog-outline' onPress={handlePress} />
}
