import React from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image'

export const Image = (props: FastImageProps) => {
  return (
    <FastImage
      {...props}
      resizeMode='center'
      defaultSource={require('@assets/placeholder.png')}
    />
  )
}
