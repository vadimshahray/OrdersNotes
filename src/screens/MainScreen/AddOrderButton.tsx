import { FAB } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const AddOrderButton = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateToOrderDesignScreen = () => {
    navigate('OrderDesignerScreen', { mode: 'create' })
  }

  return (
    <FAB icon='plus' style={style.fab} onPress={navigateToOrderDesignScreen} />
  )
}

const style = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 13,
    bottom: 13,
  },
})
