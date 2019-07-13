const template = `
const chai = require('chai')
const {DbServer} = require('../../config')
let assert = chai.assert
//loop Scenarios
<Scenario>
`
const scenario = 
`describe('<Scenario.name>', () => {
  //loop testCases
  let {<bizClass>} = require('<bizClassPath>')

  <testCases>

})`

const testCase = 
` describe('<testCase.name>', () => {
    it('<when.text>',async function () {
        let <when.object> = new <bizClass> (DbServer.dev)
        let result = await <when.object>.<when.method>(<given.values>)
        assert.<then.method>(<then.result>, <given.expect>)
      })
  })
  `

module.exports = {
  template,
  scenario,
  testCase
}

