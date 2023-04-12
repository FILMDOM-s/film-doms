declare module Comment {
  interface Parent {
    id: number
    content: string
    status: 'ACTIVE' | 'INACTIVE'
    createdAt: string
    updatedAt: string
    author: User
    childComments: ChildComment[]
    managerComment: boolean
    likes: number
  }

  interface Child {
    id: number
    content: string
    status: 'ACTIVE' | 'INACTIVE'
    createdAt: string
    updatedAt: string
    author: User
    managerComment: boolean
  }
}
