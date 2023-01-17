type RootStackParamList = {
  MainScreen: undefined
  SettingsScreen: undefined
  OrderDesignerScreen: {
    mode: 'create' | 'modify'
  }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
