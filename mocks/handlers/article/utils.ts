import cloneDeep from 'lodash/cloneDeep'

export const createArticleResponse = (
  data: Article.Item[],
  { page, limit, tag }: Record<keyof Article.Params, string | null>
): Article.Response => {
  const _page = Math.max(Number(page), 1) ?? '1'
  const _limit = Math.max(Number(limit), 1) ?? '22'
  let items = cloneDeep(data)

  if (tag) {
    items = items.filter(item => item.tag === tag)
  }

  const start = (+_page - 1) * +_limit
  const end = start + +_limit

  return {
    totalPage: Math.ceil(items.length / +_limit),
    items: items.slice(start, end),
  }
}
