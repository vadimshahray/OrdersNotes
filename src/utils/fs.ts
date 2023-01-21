import RNFS from 'react-native-fs'

export const deleteFileIfExists = async (filePath: string) => {
  if (await RNFS.exists(filePath)) {
    RNFS.unlink(filePath)
  }
}

export const deleteFilesIfExists = async (filePaths: string[]) => {
  filePaths.forEach((path) => deleteFileIfExists(path))
}
