import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

export const ListItemWrapper = ({ children }: PropsWithChildren) => {
  return <View style={styles.view}>{children}</View>
}

const styles = StyleSheet.create({
  view: {
    marginVertical: 4,
    marginHorizontal: 16,
  },
})
