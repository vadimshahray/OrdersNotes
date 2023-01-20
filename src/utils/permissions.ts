import { PermissionsAndroid } from 'react-native'

export const requestWriteExternalStorage = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Требуется разрешение',
        message:
          'Для корректной работы, приложению требуется доступ к внешнему хранилищу устройства',
        buttonPositive: 'Разрешить',
      },
    )

    return granted === PermissionsAndroid.RESULTS.GRANTED
  } catch (e) {}

  return false
}
