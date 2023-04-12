/**
 *
 * @param {string} createdAt
 * @returns {string} 지난 시간
 */

export const getRoundString = (score: number) => {
  if (score / 1000 >= 1) {
    return `${Math.floor(score / 1000)}k`
  } else {
    return `${score}`
  }
}
