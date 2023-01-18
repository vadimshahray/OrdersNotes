import { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { ListItemWrapper, ListEmptyContent } from '@components'
import {
  FlashList,
  FlashListProps,
  ListRenderItemInfo,
} from '@shopify/flash-list'

export type ListProps<Item> = {
  onItemPress: (item: Item) => void
} & FlashListProps<Item>

export function List<Item>({
  renderItem,
  onItemPress,
  ...props
}: ListProps<Item>) {
  const renderWrappedItem = useCallback(
    (itemData: ListRenderItemInfo<Item>) => {
      const handlePress = () => {
        onItemPress(itemData.item)
      }

      return (
        <ListItemWrapper onPress={handlePress}>
          {renderItem?.(itemData)}
        </ListItemWrapper>
      )
    },
    [renderItem],
  )

  return props.data?.length ? (
    <FlashList
      contentContainerStyle={styles.listContentContainer}
      {...props}
      renderItem={renderWrappedItem}
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
