import React from 'react'
import { OrderForm } from './OrderForm'
import { ScreenContent } from '@components'
import { useOrderDesignerHeaderRight, useScreenTitle } from '@hooks'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const OrderDesignerScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'OrderDesignerScreen'>) => {
  const mode = route.params.mode
  useScreenTitle(mode === 'create' ? 'Новый заказ' : 'Редактировать заказ')

  const navigateBack = () => {
    navigation.goBack()
  }

  useOrderDesignerHeaderRight(navigateBack)

  return (
    <ScreenContent>
      <OrderForm onSubmit={navigateBack} />
    </ScreenContent>
  )
}
