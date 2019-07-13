const { Random } = require('../utils')
const { Member } = require('../biz')
const chai = require('chai');

const dbConfig = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    connectionString: 'mongodb://localhost:27017/membership'
  } ;
let assert = chai.assert;
let member = new Member(dbConfig);
let memberData = Random.GenUserCards(1);
let memberInfo = memberData[0];

describe('Members', () => {
 
    describe('Insert a member', () => {
        it(`should return ${memberInfo.name}`,async () => {
            let result = await member.Add(memberData);
            assert.equal(result.ops[0].name, memberInfo.name);
        })
    });

    describe('Update a member', () => {
        let updateMember = Random.GenUserCards(1)[0];
        let updateData = {
            condition: {
                name: memberInfo.name
            },
            data: {
                email: updateMember.email
            }
        }
        it(`should return nModified is 1`,async () => {
            let result = await member.Edit(updateData)
            assert.equal(result.result.nModified, 1)
        })
    })

    describe('Find a member', () => {
        let condition = {
          name: memberInfo.name
        }
        it(`should found a member is ${memberInfo.name}`,async () => {
          let result = await member.Find(condition)
          console.log('Find', result)
          assert.equal(result[0].name, memberInfo.name)
        })
    })
     
    describe('Delete a member', () => {
        let condition = {
          condition: {
            name: memberInfo.name
          }
        }
        it(`should remove a member is 1`,async () => {
          let result = await member.Remove(condition)
          assert.equal(result.result.n, 1)
        })
    })
     
})