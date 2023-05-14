Feature: Crear una página

@user1 @web
Scenario: Con mi usuario de ghost quiero crear una página y asignarla a un tag, usuario y extracto
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
    And I click settings
    And I wait for 1 seconds
    And I click tags
    And I wait for 1 seconds
    And I click a tag
    And I wait for 1 seconds
    And I enter Excerpt
    And I wait for 1 seconds
    And I click authors
    And I wait for 1 seconds
    And I click an author
    And I wait for 1 seconds
    And I click close
    And I wait for 1 seconds
    And I click publish
    And I wait for 1 seconds
    And I click save
    And I wait for 1 seconds
    Then I return to page list