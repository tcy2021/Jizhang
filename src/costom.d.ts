type RecordItem= {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date
}

type Tag = {
  id: string
  name: string
}
type  TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => string
  update: (id: string, name: string) => "success" | "not found" | "duplicated"
  remove:(id:string)=>boolean
  save: () => void
}

interface Window {
  tagList:Tag[]
}