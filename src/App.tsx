import React from 'react'
import { store } from './store'
import { DefaultTheme } from '@styles'
import { AppBar, StatusBar } from '@components'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MainScreen, SettingsScreen, OrderDesignerScreen } from '@screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <PaperProvider theme={DefaultTheme}>
          <StatusBar />

          <NavigationContainer theme={DefaultTheme}>
            <Navigator
              initialRouteName='MainScreen'
              screenOptions={{
                header: AppBar,
              }}
            >
              <Screen name='MainScreen' component={MainScreen} />

              <Screen name='SettingsScreen' component={SettingsScreen} />

              <Screen
                name='OrderDesignerScreen'
                component={OrderDesignerScreen}
              />
            </Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </ReduxProvider>
  )
}
