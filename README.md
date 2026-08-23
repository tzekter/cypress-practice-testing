1. Scenario: New user creates an account with valid credentials 
Given the user is on the registration page
When the user fills in the registration form with valid name, email and password
And the user submits the registration form 
Then the user is redirected to the login page
And a success confirmation message is displayed

2. Registered user signs in with valid credentials
Given the user is on the login page
When the user enters a valid email and password
And the user clicks the "Login" button
Then the user is redirected to the home page 
And the navigation bar displays the user`s account menu

3. Scenario: User views detailed information on a product page
Given the user is on the home page
When the user clicks on a product card
Then the product detail page opens
And the page displays the product name, price, description and an "Add to cart" button

4. Scenario: Authenticated user completes a purchase through checkout
Given the user is logged in
And the user has at least one product in the cart
When the user proceeds to checkout
And the user fills in valid billing address details
And the user selects a payment method and confirms the order
Then the order confirmation page is displayed
And the confirmation page shows the order number and a summary of purchased items
