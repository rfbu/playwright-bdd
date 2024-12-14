# playwright-bdd
more playwright code with BDD

notes:
in cucumber.json, "dryRun":false means script will be run with the steps 

![image](https://github.com/user-attachments/assets/c6a56ab8-ac53-4567-ba9c-fda3f8bd802b)

"dryRun":true means the scenario and steps will be skipped

![image](https://github.com/user-attachments/assets/9766924e-9b80-4240-8e7b-7c7cb7cd0ec7)

if steps are not defined, we will get the followin -> observe the suggested code

![image](https://github.com/user-attachments/assets/6b269693-4940-49a9-864f-99152221f3ef)

in order to run successfully, add the following in the step file:
const { Given, When, Then } = require('@cucumber/cucumber');

note the 'require' and not 'import' -> WIP why this is so
![image](https://github.com/user-attachments/assets/94bae4bc-1984-45bd-9175-27e287b96672)

"type":"module" is not required in either cucumber.json or package.json -> WIP why this is so
