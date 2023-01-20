import React, { useEffect, useState } from 'react'
import { makeThemeStyles } from '@styles'
import { Button } from 'react-native-paper'
import { pickPhotosFromGallery } from '@utils'
import { OrdersPhotosList } from './OrderPhotosList'

export type OrderPhotosProps = {
  initPhotos: Order['photos']
  onPhotosChange: (photos: Order['photos']) => void
}

export const OrderPhotos = ({
  initPhotos,
  onPhotosChange,
}: OrderPhotosProps) => {
  const [photos, setPhotos] = useState<Order['photos']>(initPhotos)

  const pickPhotos = async () => {
    const pickedPhotos = await pickPhotosFromGallery()

    if (pickedPhotos?.length) {
      setPhotos([...photos, ...pickedPhotos])
    }
  }

  useEffect(() => {
    onPhotosChange(photos)
  }, [photos, onPhotosChange])

  const styles = useStyles()

  return (
    <>
      <OrdersPhotosList photos={photos} />

      <Button
        icon='file-image-plus-outline'
        style={styles.addButton}
        onPress={pickPhotos}
      >
        Добавить фото
      </Button>
    </>
  )
}

const useStyles = makeThemeStyles((theme) => ({
  addButton: {
    alignSelf: 'flex-end',

    color: theme.colors.onSecondaryContainer,
    backgroundColor: theme.colors.primaryContainer,
  },
}))
