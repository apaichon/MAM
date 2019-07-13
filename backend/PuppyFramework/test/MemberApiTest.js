const { Random } = require('../utils')
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let assert = chai.assert;
let memberData = Random.GenUserCards(1);
let memberInfo = memberData[0];

describe('Scenario CRUD of Members REST Api', () => {
    describe(`Given Member name is ${memberInfo.name}`, () => {
      it(`When add member name is ${memberInfo.name}`, async () => {
      let result = await chai.request('http://localhost:3000')
        .post('/membership/member/add')
        .set('content-Type', 'application/json')
        .send(memberData);
        // Then
        assert.equal(result.body.ops[0].name, memberInfo.name);
      })
    })

    let newInfo = Random.GenUserCards(1)[0];
    describe(`Given member name is ${memberInfo.name}, email is ${memberInfo.email}`, () => {
      it(`When update member name is ${memberInfo.name}, email is ${newInfo.email}`, async () => {
     
        let updateData = {
          condition: {
            name: memberInfo.name
          },
          data: {
            email: newInfo.email
          }
        }
        let result = await chai.request('http://localhost:3000')
        .put('/membership/member/edit')
        .set('content-Type', 'application/json')
        .send(updateData)
        // Then
        assert.equal(result.body.nModified, 1)
      })
    })

    describe(`Given member name is ${memberInfo.name}`, () => {
        it(`When find member name is ${memberInfo.name}`, async () => {
          let result = await chai.request('http://localhost:3000')
          .get(`/membership/member/get?name=${memberInfo.name}`)
          .set('content-Type', 'application/json');
          // Then
          assert.equal(result.body[0].name, memberInfo.name);
        })
    })
    
   /* describe(`Given member name is ${memberInfo.name}`, () => {
        it(`When delete member name is ${memberInfo.name}`, async () => {
          let condition = {
              condition: {
              name: memberInfo.name
              }
          }
          let result = await chai.request('http://localhost:3000')
          .delete(`/membership/member/delete`)
          .set('content-Type', 'application/json')
          .send(condition)
          // Then
          assert.equal(result.body.n, 1)
        })
    })*/
})
   