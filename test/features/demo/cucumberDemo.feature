#@demo @smoke
Feature: Demo feature
    I can have more info about the feature...
    I can have more info about the feature...
    I can have more info about the feature...
    I can have more info about the feature...
    - Questions/Clarifications
    - Known issues
    - ToDo

   
    Background: Launch Google Page
    Given Google page is opened

    
    Scenario: Scenario name
        When Search with WDIO
        Then Click on the first search result
        * URL should match https://webdriver.io/
    
    Scenario: Scenario name
        When Search with webdriverio
        Then Click on the first search result
        * URL should match https://webdriver.io/