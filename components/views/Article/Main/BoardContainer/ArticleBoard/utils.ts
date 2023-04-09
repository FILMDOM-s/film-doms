export const convertKilo = (num: number, digits: number): string =>
  num < 1000
    ? `${num}`
    : `${+Number.parseFloat((num / 1000).toString()).toFixed(digits)}K`

export const convertCommentCount = (num: number): string => {
  const min = Math.min(num, 100)

  return min < 100 ? `${min}` : '99+'
}
