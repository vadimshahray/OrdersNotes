import React from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image'

export const Image = (props: FastImageProps) => {
  return (
    <FastImage
      resizeMode='cover'
      defaultSource={require('@assets/placeholder.png')}
      {...props}
    />
  )
}
