Feature: user auth test

    Background: 
        Given user navigates to app
        And user click on the login link

    @smoke
    Scenario: Login success
        Given user enter the username
        And user enter the password