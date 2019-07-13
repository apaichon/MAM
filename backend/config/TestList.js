const TestList = {
    "scenarios": 
      [
        {
          "index": 1,
          "name": "Members CRUD",
          "fileName": "./test/testList/MembersCRUD.js",
          "bizClass": "Member",
          "bizClassPath": "../../PuppyFramework/biz",
          "testCases": 
            [
              {
                "index": 1,
                "name": "Insert a Member.",
                "given": {
                  "values": [{name: "Apaichon Punopas", email: "apaichon@gmail.com"}],
                  "expect": "'Apaichon Punopas'"
                },
                "when": {
                  "text": "Should return memeber name is \"Apaichon Punopas\"",
                  "object": "member",
                  "method": "Add"
                },
                "then": {
                  "method": "equal",
                  "result": "result.ops[0].name"
                }
              },
              {
                "index": 2,
                "name": "Update a Member.",
                "given": {
                  "values": 
                  {
                    condition: { name: "Apaichon Punopas" },
                    data: { email: "apaichon@hotmail.com" }
                  } ,
                  "expect": "1"
                },
                "when": {
                  "text": "Should return update status is 1",
                  "object": "member",
                  "method": "Edit"
                },
                "then": {
                  "method": "equal",
                  "result": "result.result.nModified"
                }
              }
            ]
        }
      ]
  }
  
  module.exports = { TestList }