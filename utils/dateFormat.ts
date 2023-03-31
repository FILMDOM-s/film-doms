/**
 * YYYY. MM. DD 형식으로 반환
 * 만약 endDate가 있다면 YYYY. MM. DD ~ MM. DD 를 반환
 *
 * @param {string} startDate
 * @param {string} [endDate]
 * @returns {string} 변환된 날짜 형식
 */

const dateFormat = (startDate: string, endDate?: string) => {
  const date = new Date(startDate)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const start = `${year}. ${month}. ${day}`

  if (endDate) {
    const date = new Date(endDate)
    const endMonth = String(date.getMonth() + 1).padStart(2, '0')
    const endDay = String(date.getDate()).padStart(2, '0')
    const end = `${endMonth}. ${endDay}`
    return `${start} ~ ${end}`
  }

  return start
}

export default dateFormat
