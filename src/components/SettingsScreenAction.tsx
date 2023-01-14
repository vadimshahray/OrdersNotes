import { Appbar } from 'react-native-paper'

export const SettingsScreenAction = ({ onPress }: AppBarActionProps) => {
  return <Appbar.Action icon='cog-outline' onPress={onPress} />
}
