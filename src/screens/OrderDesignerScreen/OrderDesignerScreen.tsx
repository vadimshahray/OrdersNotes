import { OrderForm } from './OrderForm'
import { useScreenTitle } from '@hooks'
import { ScreenContent } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const OrderDesignerScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'OrderDesignerScreen'>) => {
  const mode = route.params.mode
  useScreenTitle(mode === 'create' ? 'Новый заказ' : 'Редактировать заказ')

  const handleSubmit = () => {
    navigation.goBack()
  }

  return (
    <ScreenContent>
      <OrderForm mode={mode} onSubmit={handleSubmit} />
    </ScreenContent>
  )
}
