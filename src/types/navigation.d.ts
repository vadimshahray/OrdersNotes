type RootStackParamList = {
  MainScreen: undefined
  SettingsScreen: undefined
  OrderDesignerScreen: {
    mode: 'create' | 'modify'
  }
}

type AppNavigation =
  import('@react-navigation/native-stack').NativeStackNavigationProp<RootStackParamList>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
