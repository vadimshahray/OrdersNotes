import React from 'react'
import { DefaultTheme } from '@styles'
import { AppBar, StatusBar } from '@components'
import { MainScreen, SettingsScreen } from '@screens'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default () => {
  return (
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
          </Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
