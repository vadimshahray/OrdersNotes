import React from 'react'
import { Dialog, Portal, Button, Text } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const ModalScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'ModalScreen'>) => {
  // useScreenTitle(route.params.title)

  const navigateBack = () => {
    navigation.goBack()
  }

  const handleOkPress = () => {
    route.params.okAction?.onPress()
    navigateBack()
  }

  const handleCancelPress = () => {
    route.params.cancelAction?.onPress()
    navigateBack()
  }

  return (
    <Portal>
      <Dialog visible onDismiss={navigateBack}>
        <Dialog.Title>{route.params.title}</Dialog.Title>

        {route.params.text !== undefined && (
          <Dialog.Content>
            <Text>{route.params.text}</Text>
          </Dialog.Content>
        )}

        <Dialog.Actions>
          <Button onPress={handleCancelPress}>
            {route.params.cancelAction?.text ?? 'Отмена'}
          </Button>

          <Button onPress={handleOkPress}>
            {route.params.okAction?.text ?? 'Хорошо'}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}
