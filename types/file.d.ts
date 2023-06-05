type FileRequest = {
  file: File
}

type FileResponse = {
  resultCode: string
  result: {
    uploadedFiles: UploadedFiles[]
  }
}

type UploadedFiles = {
  id: number
  originalFileName: string
  uuidFileName: string
}
