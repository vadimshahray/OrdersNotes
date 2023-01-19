import AsyncStorage from '@react-native-async-storage/async-storage'

export const getStorageItem = async (
  item: keyof IStorageItems,
): Promise<IStorageItems[typeof item]> => {
  const data = await AsyncStorage.getItem(item)

  return data ? JSON.parse(data) : undefined
}

export const setStorageItem = async (
  item: keyof IStorageItems,
  value: Required<IStorageItems[typeof item]>,
) => {
  const json = JSON.stringify(value)

  await AsyncStorage.setItem(item, json)
}

export const removeStorageItem = async (item: keyof IStorageItems) => {
  await AsyncStorage.removeItem(item)
}
