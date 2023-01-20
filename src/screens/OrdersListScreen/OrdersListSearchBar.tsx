import React from 'react'
import { setSearch } from '@slices'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { Searchbar } from 'react-native-paper'
import { selectOrdersSearch } from '@selectors'

export const OrdersListSearchBar = () => {
  const dispatch = useDispatch()

  const search = useSelector(selectOrdersSearch)

  const handleTextChange = (query: string) => {
    dispatch(setSearch(query))
  }

  return (
    <Searchbar
      value={search}
      placeholder='Название/примечания'
      onChangeText={handleTextChange}
    />
  )
}
