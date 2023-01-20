type EditableOrder = {
  name: string
  notes?: string

  photos: string[]
}

type Order = {
  id: number
  creationDate: number
} & EditableOrder
