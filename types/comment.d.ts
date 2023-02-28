// * 임의로 설정해놓은 타입입니다.
interface Comment {
  id: number
  content: string
  createdAt: string
  updatedAt: string
  reviewId: Review['id']
  userId: number
}
