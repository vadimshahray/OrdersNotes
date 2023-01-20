type RootStackParamList = {
  OrdersListScreen: undefined
  OrderDesignerScreen: {
    mode: 'create' | 'modify'
    initOrder?: Order
  }
}

type AppNavigation =
  import('@react-navigation/native-stack').NativeStackNavigationProp<RootStackParamList>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
