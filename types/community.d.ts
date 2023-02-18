interface Community {
  id: number
  title: string
  category: string
  comment: Comment['id'][]
}
