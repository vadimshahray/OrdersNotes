import { launchImageLibrary } from 'react-native-image-picker'

export const pickPhotosFromGallery = async () => {
  const response = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 0,
    quality: 0.5,
    maxWidth: 900,
    maxHeight: 1200,
  })

  const pickedPhotos = response.assets
    ?.filter((asset) => asset.uri)
    .map((asset) => asset.uri!)

  return pickedPhotos
}
