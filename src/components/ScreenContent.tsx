import { View, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type ScreenContentProps = {
  noPadding?: boolean
} & PropsWithChildren

export const ScreenContent = ({
  noPadding = false,
  children,
}: ScreenContentProps) => {
  const insets = useSafeAreaInsets()

  const paddingH = noPadding ? 0 : 16
  const paddingV = noPadding ? 0 : 13

  return (
    <View
      style={[
        {
          paddingTop: insets.top + paddingV,
          paddingBottom: insets.bottom + paddingV,
          paddingLeft: insets.left + paddingH,
          paddingRight: insets.right + paddingH,
        },
        styles.view,
      ]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})
