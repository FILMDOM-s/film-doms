export const createPagination = <T>(
  data: T[],
  params: Required<User.Activity.Params>
) => {
  const { page, size } = params
  const clone = structuredClone(data)
  const start = page * size
  const end = start + size

  return {
    content: clone.slice(start, end),
    totalElements: clone.length,
    totalPages: Math.ceil(clone.length / size),
    size,
  }
}
