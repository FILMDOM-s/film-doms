import api from '../api'

export const imageUpload = (file: File) => {
  return api.post<null, FileResponse, FileRequest>(
    '/api/v1/file',
    {
      file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )
}
