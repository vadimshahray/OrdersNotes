import React from 'react'
import { useEffect } from 'react'
import { DeleteOrderAction } from '@components'
import { useNavigation, useRoute } from '@hooks'

export const useOrderDesignerHeaderRight = (handleDelete: () => void) => {
  const {
    params: { mode, initOrder },
  } = useRoute<'OrderDesignerScreen'>()

  const { setOptions } = useNavigation()

  useEffect(() => {
    if (mode === 'modify') {
      setOptions({
        headerRight: () => (
          <DeleteOrderAction
            orderId={initOrder?.id ?? 0}
            onDelete={handleDelete}
          />
        ),
      })
    }
  }, [mode, initOrder, handleDelete, setOptions])
}
