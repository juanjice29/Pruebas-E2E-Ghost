Feature: Crear un post

@user1 @web
Scenario: Con mi usuario de ghost quiero crear un post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter login email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter login password "<PASSWORD1>"
    And I wait for 1 seconds
    And I submit login
    And I wait for 3 seconds
    Then I should have a nav-bar with functions

    When I click on the post function
    And I wait for 1 seconds
    Then I should have a new post button

    When I click on the post button
    And I wait for 1 seconds
    Then I should have a form to enter post information

    When I enter post title
    And I wait for 1 seconds
    And I enter post description
    And I wait for 1 seconds
    And I click publish post
    And I wait for 1 seconds
    And I click save post
    And I wait for 1 seconds
    Then I return to post list