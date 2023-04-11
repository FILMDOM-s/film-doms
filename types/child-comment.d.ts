interface ChildComment {
  id: number
  content: string
  status: 'ACTIVE' | 'INACTIVE'
  createdAt: string
  updatedAt: string
  author: User
  managerComment: boolean
}
