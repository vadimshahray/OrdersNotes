import React from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

export const ListEmptyContent = () => {
  return (
    <View style={styles.view}>
      <Text>Список пуст</Text>
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
