import { PropsWithChildren } from 'react'
import { makeThemeStyles } from '@styles'
import { StyleProp, ViewStyle } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

export type ListItemWrapperProps = {
  onPress: () => void
  style?: StyleProp<ViewStyle>
} & PropsWithChildren

export const ListItemWrapper = ({
  onPress,
  children,
  style,
}: ListItemWrapperProps) => {
  const styles = useStyles()

  return (
    <TouchableRipple style={[styles.view, style]} onPress={onPress}>
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
}))
