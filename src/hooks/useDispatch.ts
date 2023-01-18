import { useDispatch as useReduxDispatch } from 'react-redux'

export const useDispatch = () => {
  return useReduxDispatch<AppDispatch>()
}
