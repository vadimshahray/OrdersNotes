import React from 'react'
import * as Yup from 'yup'
import { Button } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { ValidatedTextInput } from '@components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = Yup.object<Record<keyof EditableOrder, Yup.AnySchema>>(
  {
    name: Yup.string().required('Это поле обязательное'),
    customer: Yup.string(),
  },
)

export const OrderForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<EditableOrder>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      customer: '',
    },
    resolver: yupResolver(validationSchema),
  })

  const saveOrder = (order: EditableOrder) => {}

  return (
    <View style={styles.view}>
      <View>
        <Controller
          name='name'
          control={control}
          render={({
            field: { onChange, ...fieldProps },
            fieldState: { error, invalid },
          }) => {
            return (
              <ValidatedTextInput
                label='Название'
                error={invalid}
                errorText={error?.message}
                onChangeText={onChange}
                {...fieldProps}
              />
            )
          }}
        />

        <Controller
          name='customer'
          control={control}
          render={({
            field: { onChange, ...fieldProps },
            fieldState: { error, invalid },
          }) => {
            return (
              <ValidatedTextInput
                label='Покупатель'
                error={invalid}
                errorText={error?.message}
                onChangeText={onChange}
                {...fieldProps}
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
        Создать новый заказ
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
