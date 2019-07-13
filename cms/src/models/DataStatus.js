import { ObjectModel } from 'objectmodel'

export default new ObjectModel({
  id: String,
  code: String,
  'name': {
    th_TH: String,
    en_US: String
  },
  'description': {
    th_TH: String,
    en_US: String
  },
  createdDate: Date,
  createdBy: String,
  modifiedDate: Date,
  modifiedBy: String,
  isActive: Number
})
