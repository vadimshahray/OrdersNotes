import { StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import {
  FlashList,
  FlashListProps,
  ListRenderItemInfo,
} from '@shopify/flash-list'
import {
  ListItemWrapper,
  ListItemWrapperProps,
  LIST_ITEM_WRAPPER_H_OFFSET,
  LIST_ITEM_WRAPPER_V_OFFSET_V,
} from '@components'

export const LIST_PADDING_V = 3.5

export type ListProps<Item> = {
  isLoading?: boolean
  emptyContent: JSX.Element
  Skeleton?: React.ComponentType
  onItemPress: (item: Item, index: number) => void
  itemStyle?: ListItemWrapperProps['style']
  itemSize: number
} & Omit<FlashListProps<Item>, 'ListEmptyComponent' | 'estimatedItemSize'>

export function List<Item>({
  renderItem,
  onItemPress,
  isLoading,
  Skeleton,
  itemStyle,
  emptyContent,
  itemSize,
  ...props
}: ListProps<Item>) {
  const renderWrappedItem = useCallback(
    (itemData: ListRenderItemInfo<Item>) => {
      const handlePress = () => {
        onItemPress(itemData.item, itemData.index)
      }

      return (
        <ListItemWrapper
          onPress={handlePress}
          style={itemStyle}
          horizontal={props.horizontal ?? false}
        >
          {renderItem?.(itemData)}
        </ListItemWrapper>
      )
    },
    [renderItem, itemStyle, onItemPress, props.horizontal],
  )

  const estimatedItemSize =
    itemSize +
    (props.horizontal
      ? 2 * LIST_ITEM_WRAPPER_H_OFFSET
      : 2 * LIST_ITEM_WRAPPER_V_OFFSET_V)

  return isLoading && Skeleton ? (
    <Skeleton />
  ) : props.data?.length ? (
    <FlashList
      keyboardDismissMode='interactive'
      contentContainerStyle={styles.listContentContainer}
      {...props}
      renderItem={renderWrappedItem}
      estimatedItemSize={estimatedItemSize}
    />
  ) : (
    emptyContent
  )
}

const styles = StyleSheet.create({
  listContentContainer: {
    paddingVertical: LIST_PADDING_V,
  },
})
