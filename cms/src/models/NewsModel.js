import { ObjectModel } from 'objectmodel'

export default new ObjectModel({
  id: String,
  title: String,
  newsCategory: String,
  description: String,
  imageUrl: String,
  videoUrl: String,
  createdDate: Date
})
