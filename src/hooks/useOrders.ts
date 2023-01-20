import { useEffect } from 'react'
import { useDispatch } from '@hooks'
import { getAllOrders } from '@slices'
import { useSelector } from 'react-redux'
import { selectOrdersIsLoading, selectQueryOrders } from '@selectors'

export const useOrders = () => {
  const dispatch = useDispatch()

  const orders = useSelector(selectQueryOrders)
  const isLoading = useSelector(selectOrdersIsLoading)

  useEffect(() => {
    if (isLoading) {
      dispatch(getAllOrders())
    }
  }, [isLoading, dispatch])

  return {
    isLoading,
    data: orders,
  }
}
