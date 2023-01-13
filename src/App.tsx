import React from 'react'
import { MainScreen } from '@screens'
import { DefaultTheme } from '@styles'
import { AppBar, StatusBar } from '@components'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export default () => {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  )
}
