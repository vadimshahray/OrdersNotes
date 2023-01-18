import { useMemo } from 'react'
import { MD3Theme, useTheme } from 'react-native-paper'
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export const makeThemeStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: (theme: MD3Theme) => T,
): (() => T) => {
  return () => {
    const theme = useTheme()

    return useMemo(() => StyleSheet.create(styles(theme)), [theme])
  }
}
