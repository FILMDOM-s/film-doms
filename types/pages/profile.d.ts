declare module PublicProfile {
  type Response = {
    resultCode: string
    result: {
      id: number
      registeredAt: number
      nickname: string
      accountRole: string
      accountStatus: string
      profileImage: {
        id: number
        uuidFileName: string
      }
      favoriteMovies: string[]
      socialLogin: boolean
    }
  }
}
