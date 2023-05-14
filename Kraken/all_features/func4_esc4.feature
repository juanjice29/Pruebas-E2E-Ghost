Feature: Crear una página

@user1 @web
Scenario: Con mi usuario de ghost quiero crear una página y programarla para que se publique en una fecha específica
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter login email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter login password "<PASSWORD1>"
    And I wait for 1 seconds
    And I submit login
    And I wait for 3 seconds
    Then I should have a nav-bar with functions

    When I click on the page function
    And I wait for 1 seconds
    Then I should have a new page button

    When I click on the page button
    And I wait for 1 seconds
    Then I should have a form to enter page information

    When I enter page title
    And I wait for 1 seconds
    And I enter page description
    And I wait for 1 seconds
    And I click publish
    And I wait for 1 seconds
    And I select scheduled publish option
    And I wait for 1 seconds
    And I close the scheduled on the screen
    And I wait for 1 seconds
    And I close the setting options
    And I wait for 1 seconds
    And I click publish
    And I wait for 1 seconds
    And I click save
    And I wait for 1 seconds
    Then I return to page list