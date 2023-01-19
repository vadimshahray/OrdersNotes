import { StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import {
  ListItemWrapper,
  ListEmptyContent,
  ListItemWrapperProps,
} from '@components'
import {
  FlashList,
  FlashListProps,
  ListRenderItemInfo,
} from '@shopify/flash-list'

export type ListProps<Item> = {
  isLoading: boolean
  Skeleton: React.ComponentType
  onItemPress: (item: Item) => void
  itemStyle?: ListItemWrapperProps['style']
} & FlashListProps<Item>

export function List<Item>({
  renderItem,
  onItemPress,
  isLoading,
  Skeleton,
  itemStyle,
  ...props
}: ListProps<Item>) {
  const renderWrappedItem = useCallback(
    (itemData: ListRenderItemInfo<Item>) => {
      const handlePress = () => {
        onItemPress(itemData.item)
      }

      return (
        <ListItemWrapper onPress={handlePress} style={itemStyle}>
          {renderItem?.(itemData)}
        </ListItemWrapper>
      )
    },
    [renderItem, itemStyle, onItemPress],
  )

  return isLoading ? (
    <Skeleton />
  ) : props.data?.length ? (
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
