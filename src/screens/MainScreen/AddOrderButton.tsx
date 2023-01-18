import { useNavigation } from '@hooks'
import { FAB } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export const AddOrderButton = () => {
  const { navigate } = useNavigation()

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
