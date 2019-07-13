import ApiBase from './ApiBase'
export default class NewsCategoryApi extends ApiBase {
  constructor () {
    let headers = {
      application: 'Thai Stringers',
      module: 'News',
      objectname: 'NewsCategoryBiz',
      objectfile: '../../biz/NewsCategoryBiz'
    }
    super(headers)
  }
}
