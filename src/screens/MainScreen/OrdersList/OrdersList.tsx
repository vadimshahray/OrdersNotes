import { useCallback } from 'react'
import { useNavigation } from '@hooks'
import { OrderItem } from './OrderItem'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { selectOrders } from '@selectors'
import { ListEmptyContent, ListItemWrapper } from '@components'
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'

export const OrdersList = () => {
  const orders = useSelector(selectOrders)

  const { navigate } = useNavigation()

  const navigateToOrderDesigner = useCallback(() => {
    navigate('OrderDesignerScreen', { mode: 'modify' })
  }, [navigate])

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Order>) => (
      <ListItemWrapper onPress={navigateToOrderDesigner}>
        <OrderItem order={item} />
      </ListItemWrapper>
    ),
    [navigateToOrderDesigner],
  )

  return orders.length ? (
    <FlashList
      data={orders}
      renderItem={renderItem}
      estimatedItemSize={30}
      contentContainerStyle={styles.listContentContainer}
    />
  ) : (
    <ListEmptyContent />
  )
}

const styles = StyleSheet.create({
  listContentContainer: {
    paddingVertical: 3.5,
  },
})
