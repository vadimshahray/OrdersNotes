import React from 'react'
import * as Yup from 'yup'
import { OrderPhotos } from './OrderPhotos'
import { Button } from 'react-native-paper'
import { useDispatch, useRoute } from '@hooks'
import { addOrder, updateOrder } from '@slices'
import { StyleSheet, View } from 'react-native'
import { ValidatedTextInput } from '@components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = Yup.object<
  Record<keyof Omit<EditableOrder, 'photos'>, Yup.AnySchema>
>({
  name: Yup.string().required('Это поле обязательное'),
  notes: Yup.string(),
})

export type OrderFormProps = {
  onSubmit: () => void
}

export const OrderForm = ({ onSubmit }: OrderFormProps) => {
  let photos: Order['photos'] = []
  const dispatch = useDispatch()

  const {
    params: { mode, initOrder },
  } = useRoute<'OrderDesignerScreen'>()

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<EditableOrder>({
    mode: 'onChange',
    defaultValues: {
      name: initOrder?.name ?? '',
      notes: initOrder?.notes ?? '',
    },
    resolver: yupResolver(validationSchema),
  })

  const handlePhotosChange = (newPhotos: Order['photos']) => {
    photos = newPhotos
  }

  const saveOrder = (order: EditableOrder) => {
    mode === 'modify' && initOrder
      ? dispatch(updateOrder({ ...initOrder, ...order, photos }))
      : dispatch(addOrder({ ...order, photos }))

    onSubmit()
  }

  return (
    <View style={styles.view}>
      <View>
        <OrderPhotos
          initPhotos={initOrder?.photos ?? []}
          onPhotosChange={handlePhotosChange}
        />

        <Controller
          name='name'
          control={control}
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => {
            return (
              <ValidatedTextInput
                label='Название'
                value={value}
                error={invalid}
                errorText={error?.message}
                onChangeText={onChange}
                style={styles.nameInput}
              />
            )
          }}
        />

        <Controller
          name='notes'
          control={control}
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => {
            return (
              <ValidatedTextInput
                label='Примечания'
                value={value}
                error={invalid}
                errorText={error?.message}
                onChangeText={onChange}
              />
            )
          }}
        />
      </View>

      <Button
        mode='contained-tonal'
        disabled={!isValid}
        onPress={handleSubmit(saveOrder)}
      >
        {mode === 'create' ? 'Создать новый заказ' : 'Сохранить изменения'}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
  },

  nameInput: {
    marginTop: 16,
  },
})
