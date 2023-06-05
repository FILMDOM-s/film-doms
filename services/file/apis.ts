import api from '../api'

export const imageUpload = (item: File) => {
  return api.post<null, FileResponse, FileRequest>('/api/v1/file', {
    file: item,
  })
}
