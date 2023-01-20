import React from 'react'
import { store } from './store'
import { AppBar } from '@components'
import { DefaultTheme } from '@styles'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { OrdersListScreen, OrderDesignerScreen } from '@screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <PaperProvider theme={DefaultTheme}>
          <NavigationContainer theme={DefaultTheme}>
            <Navigator
              initialRouteName='OrdersListScreen'
              screenOptions={{
                header: AppBar,
                statusBarStyle: 'dark',
                statusBarColor: DefaultTheme.colors.background,
              }}
            >
              <Screen name='OrdersListScreen' component={OrdersListScreen} />

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
