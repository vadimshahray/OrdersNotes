type RootStackParamList = {
  MainScreen: undefined
  SettingsScreen: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
