import React from 'react'
import { MainScreen } from '@screens'
import { DefaultTheme } from '@styles'
import { AppBar, StatusBar } from '@components'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export default () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <StatusBar />

      <NavigationContainer theme={DefaultTheme}>
        <Navigator
          screenOptions={{
            header: AppBar,
          }}
        >
          <Screen
            name='MainScreen'
            component={MainScreen}
            options={{ title: 'Главная' }}
          />
        </Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
