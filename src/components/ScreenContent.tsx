import { View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type ScreenContentProps = PropsWithChildren

export const ScreenContent = ({ children }: ScreenContentProps) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {children}
    </View>
  )
}
