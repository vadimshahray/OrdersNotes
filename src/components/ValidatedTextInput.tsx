import React from 'react'
import { HelperText, TextInput, TextInputProps } from 'react-native-paper'

export type ValidatedTextInputProps = {
  errorText?: string
} & TextInputProps

export const ValidatedTextInput = ({
  errorText,
  ...props
}: ValidatedTextInputProps) => {
  return (
    <>
      <TextInput dense {...props} />

      <HelperText type='error'>{errorText}</HelperText>
    </>
  )
}
