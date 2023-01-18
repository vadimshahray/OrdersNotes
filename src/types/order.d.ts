type EditableOrder = {
  name: string
  customer?: string
}

type Order = {
  id: number
} & EditableOrder
