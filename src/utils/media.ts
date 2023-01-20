import { launchImageLibrary } from 'react-native-image-picker'

export const pickPhotosFromGallery = async () => {
  const response = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 0,
  })

  const pickedPhotos = response.assets
    ?.filter((asset) => asset.uri)
    .map((asset) => asset.uri!)

  return pickedPhotos
}
