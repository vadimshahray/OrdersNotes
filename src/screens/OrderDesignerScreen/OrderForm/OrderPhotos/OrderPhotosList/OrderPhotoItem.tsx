import React from 'react'
import { Image } from 'react-native'
import { makeThemeStyles } from '@styles'

export const ORDER_PHOTO_HEIGHT = 200

export type OrderPhotoItemProps = {
  photoUri: string
}

export const OrderPhotoItem = ({ photoUri }: OrderPhotoItemProps) => {
  const styles = useStyles()

  return <Image source={{ uri: photoUri }} style={styles.photo} />
}

const useStyles = makeThemeStyles((theme) => ({
  photo: {
    width: 100,
    height: ORDER_PHOTO_HEIGHT,

    borderRadius: theme.roundness,
  },
}))
