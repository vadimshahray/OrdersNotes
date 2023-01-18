type EditableOrder = {
  name: string
  notes?: string
}

type Order = {
  id: number
} & EditableOrder
