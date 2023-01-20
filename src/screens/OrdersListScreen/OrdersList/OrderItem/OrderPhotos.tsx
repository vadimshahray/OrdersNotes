import React from 'react'
import { Text } from 'react-native-paper'
import { makeThemeStyles } from '@styles'
import { View, Image } from 'react-native'

export type OrderPhotosProps = {
  photos: Order['photos']
}

export const OrderPhotos = ({ photos }: OrderPhotosProps) => {
  const styles = useStyles()

  return (
    <View style={styles.photosContainer}>
      {photos.length !== 0 && (
        <>
          <Image source={{ uri: photos[0] }} style={styles.photo} />

          {photos.length > 1 && (
            <Text variant='bodySmall' style={styles.photosCount}>
              +{photos.length - 1}
            </Text>
          )}
        </>
      )}
    </View>
  )
}

const useStyles = makeThemeStyles((theme) => ({
  photosContainer: {
    width: 30,
    justifyContent: 'space-between',

    marginRight: 10,
  },

  photo: {
    width: 30,
    height: 40,

    borderRadius: theme.roundness,
  },

  photosCount: {
    color: theme.colors.secondary,

    textAlign: 'center',
  },
}))
