import { ObjectModel, ArrayModel } from 'objectmodel'

let NewsCategoryModel = new ObjectModel({
  id: String,
  code: String,
  name: {
    th_TH: String,
    en_US: String
  },
  description: {
    th_TH: [String],
    en_US: [String]
  },
  createdDate: Number,
  createdBy: String,
  modifiedDate: [Number],
  modifiedBy: [String],
  status: Number
})

NewsCategoryModel.newItem = () => {
  return new NewsCategoryModel({
    id: '',
    code: '',
    name: {
      th_TH: '',
      en_US: ''
    },
    description: {
      th_TH: '',
      en_US: ''
    },
    createdDate: new Date().getTime(),
    createdBy: '',
    modifiedDate: new Date().getTime(),
    modifiedBy: '',
    status: 0
  })
}

let NewsCategoryList = new ArrayModel([NewsCategoryModel]).defaultTo([NewsCategoryModel.newItem()])

/* let NewsCategoryList = new ArrayModel([new ObjectModel({
  id: String,
  code: String,
  name: {
    th_TH: String,
    en_US: String
  },
  description: {
    th_TH: [String],
    en_US: [String]
  },
  createdBy: String,
  modifiedBy: [String],
  status: Number
})])
*/

export default { NewsCategoryModel, NewsCategoryList }
