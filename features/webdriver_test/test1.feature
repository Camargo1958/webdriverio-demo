Feature: Webdriver site access

Scenario: Open site
Given I open webdriver.io site
When The page is presented
And We cick on API link
Then We could see a text with "Welcome to the WebdriverIO" portion
And The session is closed