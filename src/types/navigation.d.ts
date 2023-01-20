type

type RootStackParamList = {
  OrdersListScreen: undefined
  OrderDesignerScreen: {
    mode: 'create' | 'modify'
    initOrder?: Order
  }

  ModalScreen: {
    title: string
    text?: string

    okAction?: DialogAction
    cancelAction?: DialogAction
  }
}

type AppNavigation =
  import('@react-navigation/native-stack').NativeStackNavigationProp<RootStackParamList>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
