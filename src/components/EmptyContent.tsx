import React from 'react'
import { Text } from 'react-native-paper'
import { SvgProps } from 'react-native-svg'
import { StyleSheet, View } from 'react-native'

export type EmptyContentProps = {
  size?: number
  text: string
  Image: React.ComponentType<SvgProps>
}

export const EmptyContent = ({
  size = 200,
  text,
  Image,
}: EmptyContentProps) => {
  return (
    <View style={styles.view}>
      <Image width={size} height={size} />

      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
})
