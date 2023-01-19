import React from 'react'
import { List } from '@components'
import { useCallback } from 'react'
import { OrderItem } from './OrderItem'
import { makeThemeStyles } from '@styles'
import { useNavigation, useOrders } from '@hooks'
import { ListRenderItemInfo } from '@shopify/flash-list'

export const OrdersList = () => {
  const { data } = useOrders()

  const { navigate } = useNavigation()

  const navigateToOrderDesigner = useCallback(() => {
    navigate('OrderDesignerScreen', { mode: 'modify' })
  }, [navigate])

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Order>) => <OrderItem order={item} />,
    [],
  )

  const styles = useStyles()

  return (
    <List
      data={data}
      renderItem={renderItem}
      onItemPress={navigateToOrderDesigner}
      itemStyle={styles.item}
    />
  )
}

const useStyles = makeThemeStyles((theme) => ({
  item: {
    backgroundColor: theme.colors.background,
  },
}))
