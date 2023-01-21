import RNFS from 'react-native-fs'
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

export const getFileExtension = (fileName: string) => {
  return fileName.slice(fileName.lastIndexOf('.'))
}

export const AppPhotosDirectoryPath = RNFS.PicturesDirectoryPath + '/Заметки'

export const savePhotoToExternalAppDir = async (
  path: string,
  outputFileName: string,
) => {
  await RNFS.mkdir(AppPhotosDirectoryPath)

  const outputPath = `file://${AppPhotosDirectoryPath}/${outputFileName}`
  await RNFS.moveFile(path, outputPath)

  return outputPath
}
