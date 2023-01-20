import React from 'react'
import { Image } from '@components'
import { makeThemeStyles } from '@styles'

export const ORDER_PHOTO_WIDTH = 135
export const ORDER_PHOTO_HEIGHT = 180

export type OrderPhotoItemProps = {
  photoUri: string
}

export const OrderPhotoItem = ({ photoUri }: OrderPhotoItemProps) => {
  const styles = useStyles()

  return <Image source={{ uri: photoUri }} style={styles.photo} />
}

const useStyles = makeThemeStyles((theme) => ({
  photo: {
    width: ORDER_PHOTO_WIDTH,
    height: ORDER_PHOTO_HEIGHT,

    borderRadius: theme.roundness,
  },
}))
