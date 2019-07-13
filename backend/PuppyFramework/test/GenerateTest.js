const fs = require('fs');

class GenerateTest {
    constructor (testList) {
        this.TestList = testList;
        const { template, scenario, testCase } = require('./TestTemplate');
        this.Templates = {
            template,
            scenario,
            testCase
        };
    }

    Generate () {
        this.TestList.scenarios.forEach(t => {
            let scenarioData = this.Templates.scenario
            let testCases = []
            scenarioData = scenarioData.replace(/<bizClass>/g, t.bizClass)
            scenarioData = scenarioData.replace('<bizClassPath>', t.bizClassPath)
            scenarioData = scenarioData.replace('<Scenario.name>', t.name)
          
            t.testCases.forEach(c => {
              let testCaseData = this.Templates.testCase
              testCaseData = testCaseData.replace('<testCase.name>', c.name)
              testCaseData = testCaseData.replace('<when.text>', c.when.text)
              testCaseData = testCaseData.replace(/<when.object>/g, c.when.object)
              testCaseData = testCaseData.replace('<bizClass>', t.bizClass)
              testCaseData = testCaseData.replace('<when.method>', c.when.method)
              testCaseData = testCaseData.replace('<given.values>', JSON.stringify(c.given.values))
              testCaseData = testCaseData.replace('<then.method>', c.then.method)
              testCaseData = testCaseData.replace('<then.result>', c.then.result)
              testCaseData = testCaseData.replace('<given.expect>', c.given.expect)
              testCases.push(testCaseData)
            })
            scenarioData = scenarioData.replace('<testCases>', testCases.join('\n'))
            // scenarios.push(scenarioData)
            let textData = this.Templates.template
            textData = textData.replace('<Scenario>',scenarioData)
            fs.writeFile(t.fileName, textData, (err) => {
              if (err) throw err;
              console.log('The file has been saved!');
            })
          });     
    }
}

module.exports = GenerateTest;
