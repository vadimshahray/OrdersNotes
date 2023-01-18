import { StyleSheet } from 'react-native'
import { PropsWithChildren } from 'react'
import { TouchableRipple } from 'react-native-paper'

export type ListItemWrapperProps = {
  onPress: () => void
} & PropsWithChildren

export const ListItemWrapper = ({
  onPress,
  children,
}: ListItemWrapperProps) => {
  return (
    <TouchableRipple style={styles.view} onPress={onPress}>
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
