import { StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import { ListItemWrapper, ListItemWrapperProps } from '@components'
import {
  FlashList,
  FlashListProps,
  ListRenderItemInfo,
} from '@shopify/flash-list'

export const LIST_PADDING_V = 3.5

export type ListProps<Item> = {
  isLoading?: boolean
  emptyContent: JSX.Element
  Skeleton?: React.ComponentType
  onItemPress: (item: Item) => void
  itemStyle?: ListItemWrapperProps['style']
} & Omit<FlashListProps<Item>, 'ListEmptyComponent'>

export function List<Item>({
  renderItem,
  onItemPress,
  isLoading,
  Skeleton,
  itemStyle,
  emptyContent,
  ...props
}: ListProps<Item>) {
  const renderWrappedItem = useCallback(
    (itemData: ListRenderItemInfo<Item>) => {
      const handlePress = () => {
        onItemPress(itemData.item)
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

  return isLoading && Skeleton ? (
    <Skeleton />
  ) : props.data?.length ? (
    <FlashList
      keyboardDismissMode='interactive'
      contentContainerStyle={styles.listContentContainer}
      {...props}
      renderItem={renderWrappedItem}
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
