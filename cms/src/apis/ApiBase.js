import CoreApi from './CoreApi'

let headers = CoreApi.getHeader()

export default class ApiBase {
  constructor (customHeader) {
    if (customHeader) {
      headers = customHeader
    }
  }
  static GetHeader () {
    return headers
  }
  Add (data) {
    headers.objectmethod = 'Add'
    CoreApi.setHeader(headers)
    return CoreApi.submit(data)
  }
  Edit (data) {
    headers.objectmethod = 'Edit'
    CoreApi.setHeader(headers)
    return CoreApi.submit(data)
  }
  EditById (data) {
    headers.objectmethod = 'EditById'
    CoreApi.setHeader(headers)
    return CoreApi.submit(data)
  }
  Find (data) {
    headers.objectmethod = 'Find'
    CoreApi.setHeader(headers)
    return CoreApi.submit(data)
  }
  Remove (data) {
    headers.objectmethod = 'Remove'
    CoreApi.setHeader(headers)
    return CoreApi.submit(data)
  }
}
