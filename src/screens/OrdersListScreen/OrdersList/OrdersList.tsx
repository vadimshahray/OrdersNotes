import React from 'react'
import { useCallback } from 'react'
import { OrderItem } from './OrderItem'
import { makeThemeStyles } from '@styles'
import { EmptyContent, List } from '@components'
import { useNavigation, useOrders } from '@hooks'
import EmptyImage from '@assets/empty_orders_list.svg'
import { ListRenderItemInfo } from '@shopify/flash-list'
import { OrdersListSkeleton } from './OrdersListSkeleton'

export const OrdersList = () => {
  const { data, isLoading } = useOrders()
  const { navigate } = useNavigation()

  const navigateToOrderDesigner = useCallback(
    (order: Order) => {
      navigate('OrderDesignerScreen', { mode: 'modify', initOrder: order })
    },
    [navigate],
  )

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Order>) => <OrderItem order={item} />,
    [],
  )

  const styles = useStyles()

  return (
    <List
      data={data}
      isLoading={isLoading}
      renderItem={renderItem}
      onItemPress={navigateToOrderDesigner}
      Skeleton={OrdersListSkeleton}
      itemStyle={styles.item}
      emptyContent={<EmptyContent text='Заказов нет' Image={EmptyImage} />}
    />
  )
}

const useStyles = makeThemeStyles((theme) => ({
  item: {
    backgroundColor: theme.colors.background,
  },
}))
