import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@hooks'
import { useSelector } from 'react-redux'
import { selectOrders } from '@selectors'
import { DeleteAllOrdersAction } from '@components'

export const useOrdersListHeaderRight = () => {
  const ordersLength = useSelector(selectOrders).length

  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({
      headerRight: () => (ordersLength ? <DeleteAllOrdersAction /> : undefined),
    })
  }, [ordersLength, setOptions])
}
