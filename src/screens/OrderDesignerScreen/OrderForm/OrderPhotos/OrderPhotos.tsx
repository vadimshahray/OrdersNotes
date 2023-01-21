import { View } from 'react-native'
import { makeThemeStyles } from '@styles'
import { Button } from 'react-native-paper'
import { pickPhotosFromGallery } from '@utils'
import React, { useEffect, useState } from 'react'
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

  const updatePhoto = (i: number, newPhoto: string) => {
    const newPhotos = [...photos]
    newPhotos[i] = newPhoto

    setPhotos(newPhotos)
  }

  const deletePhoto = (i: number) => {
    const newPhotos = [...photos]
    newPhotos.splice(i, 1)

    setPhotos(newPhotos)
  }

  const deletePhotos = () => {
    setPhotos([])
  }

  useEffect(() => {
    onPhotosChange(photos)
  }, [photos, onPhotosChange])

  const styles = useStyles()

  return (
    <>
      <OrdersPhotosList
        photos={photos}
        onPhotoUpdated={updatePhoto}
        onPhotoDeleted={deletePhoto}
      />

      <View style={styles.view}>
        {photos.length !== 0 && (
          <Button icon='file-image-remove-outline' onPress={deletePhotos}>
            Удалить все
          </Button>
        )}

        <Button
          icon='file-image-plus-outline'
          style={styles.addButton}
          onPress={pickPhotos}
        >
          Добавить фото
        </Button>
      </View>
    </>
  )
}

const useStyles = makeThemeStyles((theme) => ({
  view: {
    alignSelf: 'flex-end',

    flexDirection: 'row',
  },
  addButton: {
    color: theme.colors.onSecondaryContainer,
    backgroundColor: theme.colors.primaryContainer,
  },
}))
