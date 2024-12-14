# playwright-bdd
more playwright code with BDD

notes:
in cucumber.json, "dryRun":false means script will be run with the steps 
"dryRun":true means the scenario and steps will be skipped

in order to run successfully, add the following in the step file:
const { Given, When, Then } = require('@cucumber/cucumber');

note the 'require' and not 'import' -> WIP why this is so

"type":"module" is not required in either cucumber.json or package.json -> WIP why this is so
