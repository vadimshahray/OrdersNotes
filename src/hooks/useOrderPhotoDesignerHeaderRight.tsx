import { useNavigation } from '@hooks'
import React, { useEffect } from 'react'
import { Appbar } from 'react-native-paper'

export const useOrderPhotoDesignerHeaderRight = (
  handleUpdate: () => void,
  handleDelete: () => void,
) => {
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <>
          <Appbar.Action icon='pencil-outline' onPress={handleUpdate} />
          <Appbar.Action icon='delete-outline' onPress={handleDelete} />
        </>
      ),
    })
  }, [setOptions, handleUpdate, handleDelete])
}
