import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@hooks'
import { DeleteAllOrdersAction } from '@components'

export const useOrdersListHeaderRight = () => {
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({
      headerRight: () => <DeleteAllOrdersAction />,
    })
  }, [setOptions])
}
