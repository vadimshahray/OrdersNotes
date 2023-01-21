import React from 'react'
import { StyleSheet } from 'react-native'
import { pickPhotosFromGallery } from '@utils'
import { Image, ScreenContent } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useOrderPhotoDesignerHeaderRight, useScreenTitle } from '@hooks'

export const OrderPhotoDesigner = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'OrderPhotoDesignerScreen'>) => {
  useScreenTitle('Редактировать фото')

  const { photo, onUpdate, onDelete } = route.params

  const handleUpdatePhoto = async () => {
    const photos = await pickPhotosFromGallery(true)

    if (photos && photos.length) {
      navigation.goBack()

      onUpdate(photos[0])
    }
  }

  const handleDeletePhoto = () => {
    navigation.goBack()
    onDelete()
  }

  useOrderPhotoDesignerHeaderRight(handleUpdatePhoto, handleDeletePhoto)

  return (
    <ScreenContent>
      <Image
        source={{ uri: photo }}
        resizeMode='contain'
        style={styles.image}
      />
    </ScreenContent>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
})
