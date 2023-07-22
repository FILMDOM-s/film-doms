// convert htmlstring to text
// using regex
export const convertHtmlToText = (html: string): string => {
  return html.replace(/<[^>]*>?/gm, '')
}
