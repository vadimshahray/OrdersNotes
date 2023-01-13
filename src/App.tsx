import React from 'react'
import { MainScreen } from '@screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='MainScreen' component={MainScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
