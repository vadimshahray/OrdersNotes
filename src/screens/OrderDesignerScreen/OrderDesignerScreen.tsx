import { OrderForm } from './OrderForm'
import { useScreenTitle } from '@hooks'
import { ScreenContent } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const OrderDesignerScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'OrderDesignerScreen'>) => {
  const mode = route.params.mode
  useScreenTitle(mode === 'create' ? 'Новый заказ' : 'Редактировать заказ')

  return (
    <ScreenContent>
      <OrderForm />
    </ScreenContent>
  )
}
