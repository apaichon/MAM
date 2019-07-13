class RunTest {

    static GenTestFile () {   
        const GenerateTest = require('./GenerateTest');
        const {TestList} = require('../config/TestList');
        console.log (TestList);
        const genTest = new GenerateTest(TestList);
        genTest.Generate();
    }
}

module.exports = RunTest;