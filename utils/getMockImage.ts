interface Options {
  title: string
  width?: number
  height?: number
}

const baseGetMockImage = ({ title, width = 200, height = 300 }: Options) =>
  `https://picsum.photos/seed/${title}/${width}/${height}`

const parseArgs = (
  arg1: Options['title'] | Options,
  arg2?: Omit<Options, 'title'>
) => {
  if (typeof arg1 === 'string') {
    return {
      title: arg1,
      ...arg2,
    }
  }

  return arg1
}

function getMockImage(title: string, options?: Omit<Options, 'title'>): string
function getMockImage(options: Options): string
function getMockImage(
  arg1: Options['title'] | Options,
  arg2?: Omit<Options, 'title'>
) {
  const args = parseArgs(arg1, arg2)

  return baseGetMockImage(args)
}

export default getMockImage
