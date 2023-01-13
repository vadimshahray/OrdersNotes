import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Appbar as PaperAppbar } from 'react-native-paper'

export const AppBar = ({
  navigation,
  back,
  options,
}: NativeStackHeaderProps) => {
  return (
    <PaperAppbar.Header>
      {back && <PaperAppbar.BackAction onPress={navigation.goBack} />}

      <PaperAppbar.Content title={options.title} />
    </PaperAppbar.Header>
  )
}
