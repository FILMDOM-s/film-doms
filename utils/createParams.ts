type Params = {
  [key: string]: unknown
}

const createParams = (params: Params) => {
  const _params = Object.entries(params)
    .filter((param): param is [string, string] => param[1] !== null)
    .reduce((acc, [key, value]) => `${acc}&${key}=${value}`, '')

  return _params
}

export default createParams
