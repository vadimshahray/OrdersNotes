import { PropsWithChildren } from 'react'
import { TouchableRipple } from 'react-native-paper'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'

export type ListItemWrapperProps = {
  onPress: () => void
  style?: StyleProp<ViewStyle>
} & PropsWithChildren

export const ListItemWrapper = ({
  onPress,
  children,
  style,
}: ListItemWrapperProps) => {
  return (
    <TouchableRipple style={[styles.view, style]} onPress={onPress}>
      {children}
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  view: {
    marginVertical: 4,
    marginHorizontal: 16,
  },
})
