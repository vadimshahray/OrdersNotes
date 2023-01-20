import React, { PropsWithChildren } from 'react'
import { makeThemeStyles } from '@styles'
import { StyleProp, ViewStyle } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

export const LIST_ITEM_WRAPPER_H_PADDING = 4
export const LIST_ITEM_WRAPPER_V_OFFSET_V = 4 + 6

export type ListItemWrapperProps = {
  onPress: () => void
  horizontal?: boolean
  style?: StyleProp<ViewStyle>
} & PropsWithChildren

export const ListItemWrapper = ({
  onPress,
  children,
  horizontal,
  style,
}: ListItemWrapperProps) => {
  const styles = useStyles()

  return (
    <TouchableRipple
      style={[horizontal ? styles.viewHorizontal : styles.view, style]}
      onPress={onPress}
    >
      {children}
    </TouchableRipple>
  )
}

const useStyles = makeThemeStyles((theme) => ({
  view: {
    marginVertical: 4,
    marginHorizontal: 16,

    paddingVertical: 6,
    paddingHorizontal: 10,

    borderRadius: theme.roundness,
  },
  viewHorizontal: {
    padding: LIST_ITEM_WRAPPER_H_PADDING,

    borderRadius: theme.roundness,
  },
}))
