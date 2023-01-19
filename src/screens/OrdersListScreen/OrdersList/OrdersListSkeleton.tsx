import React from 'react'
import { makeThemeStyles } from '@styles'
import { fillScreenWithSkeleton } from '@utils'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

export const OrdersListSkeleton = () => {
  const styles = useStyles()

  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item {...styles.list}>
        {fillScreenWithSkeleton(
          <SkeletonPlaceholder.Item key='' {...styles.item} />,
          40,
        )}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

const useStyles = makeThemeStyles((theme) => ({
  list: {
    paddingVertical: 3.5,
    paddingHorizontal: 20,
  },
  item: {
    width: '100%',
    height: 30,

    marginVertical: 5,

    borderRadius: theme.roundness,
    backgroundColor: theme.colors.surface,
  },
}))
