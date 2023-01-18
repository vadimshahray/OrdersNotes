import { List } from '@components'
import { useCallback } from 'react'
import { useNavigation } from '@hooks'
import { OrderItem } from './OrderItem'
import { useSelector } from 'react-redux'
import { selectOrders } from '@selectors'
import { makeThemeStyles } from '@styles'
import { ListRenderItemInfo } from '@shopify/flash-list'

export const OrdersList = () => {
  const orders = useSelector(selectOrders)

  const { navigate } = useNavigation()

  const navigateToOrderDesigner = useCallback(() => {
    navigate('OrderDesignerScreen', { mode: 'modify' })
  }, [navigate])

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Order>) => <OrderItem order={item} />,
    [navigateToOrderDesigner],
  )

  const styles = useStyles()

  return (
    <List
      data={orders}
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
