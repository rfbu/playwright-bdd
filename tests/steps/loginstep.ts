//import {Given} from "@cucumber/cucumber"
const { Given, When, Then } = require('@cucumber/cucumber');

Given('user navigates to app', async function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    console.log("nav to ap");
});

Given('user enter the username', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("enter username");
  });

Given('user click on the login link', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("click login");
  });

  Given('user enter the password', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("enter password");
  });

