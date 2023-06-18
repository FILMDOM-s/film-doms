declare module Auth {
  declare module SignUp {
    type Request = {
      email: string
      password: string
      nickname: string
      favoriteMovies: string[]
      emailAuthUuid: string
    }

    type GoogleRequest = {
      nickname: string
      favoriteMovies: string[]
    }

    type Response = {
      resultCode: string
      result: {
        accessToken: string
      }
    }

    type GoogleResponse = {
      resultCode: string
      result?: {
        field: string
        message: string
      }
    }

    type CheckEmailDuplicateRequest = {
      email: string
    }

    type CheckEmailDuplicateDTO = {
      result: {
        duplicate: boolean
      }
      resultCode: string
    }
  }

  declare module EmailAuthCode {
    type Request = {
      email: string
    }

    type Response = {
      resultCode: string
      result: null
    }

    type CheckRequest = {
      email: string
      authCode: string
    }

    type CheckResponse = {
      resultCode: string
      result: {
        uuid: string
      }
    }
  }

  declare module Nickname {
    type CheckRequest = {
      nickname: string
    }

    type CheckResponse = {
      result: {
        duplicate: boolean
      }
      resultCode: string
    }
  }

  declare module Token {
    type Response = {
      resultCode: string
      result: {
        accessToken: string
      }
    }
  }

  declare module SignOut {
    type Request = {
      password: string
    }
  }

  declare module SignIn {
    type Request = {
      email: string
      password: string
    }

    type DTO = {
      result: {
        type?: string
        accessToken: string
      }
      resultCode
    }
  }

  declare module FindPassword {
    type Request = {
      email: string
    }

    type DTO = {}
  }
}
