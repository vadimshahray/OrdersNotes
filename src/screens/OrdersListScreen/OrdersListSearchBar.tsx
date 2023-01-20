import React from 'react'
import { setSearch } from '@slices'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { selectOrdersSearch } from '@selectors'
import { Searchbar, useTheme } from 'react-native-paper'

export const OrdersListSearchBar = () => {
  const dispatch = useDispatch()
  const { colors } = useTheme()

  const search = useSelector(selectOrdersSearch)

  const handleTextChange = (query: string) => {
    dispatch(setSearch(query))
  }

  return (
    <Searchbar
      value={search}
      placeholderTextColor={colors.secondary}
      placeholder='Поиск'
      onChangeText={handleTextChange}
    />
  )
}
