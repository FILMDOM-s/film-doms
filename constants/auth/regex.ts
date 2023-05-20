export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const PASSWORD_REGEX = /(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/

export const NICKNAME_REGEX = /[a-zA-Zㄱ-ㅎ가-힣]{2,10}/
