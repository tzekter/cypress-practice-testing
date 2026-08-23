describe('Practice Software Testing Website Scenarios', ()=>{
    let createdEmail = '';
    const password = 'my.Password223';
    it('New user creates an account with valid credentials ', ()=>{
        cy.visit('/auth/register');
        cy.get('[data-test="first-name"]').type('Mariia');
        cy.get('[data-test="last-name"]').type('Kravets');
        cy.get('[data-test="dob"]').type('2005-03-08');
        cy.get('[data-test="country"]').select('Ukraine');
        cy.get('[data-test="postal_code"]').type('79000');
        cy.get('[data-test="house_number"]').type('3');
        cy.get('[data-test="phone"]').type('0965548963');
        const userId = crypto.randomUUID().slice(0, 6);
        createdEmail = `user${userId}@example.com`
        cy.get('[data-test="email"]').type(createdEmail);
        cy.get('[data-test="password"]').type('my.Password223', {force: true});

        cy.get('[data-test="register-submit"]').click({forсe: true});
        cy.url().should('include', '/auth/login');
    })
    
    it('Registered user signs in with valid credentials',()=>{
        cy.visit('/auth/login');
        cy.get('[data-test="email"]').type(createdEmail);
        cy.get('[data-test="password"]').type(password, {force: true});
        cy.get('[data-test="login-submit"]').click();

        cy.url().should('include', '/account')
    })

    it('User views detailed information on a product page',()=>{
        cy.visit('/');

        cy.get('.card img').should('be.visible').first().click();
        cy.url().should('include', '/product/');

        cy.get('[data-test="product-name"]').should('be.visible');
        cy.get('.price-section').should('be.visible');
        cy.get('[data-test="product-description"]').should('be.visible');
        cy.get('[data-test="add-to-cart"]').should('be.visible');

    })
    it('Authenticated user completes a purchase through checkout',()=>{
        cy.visit('/auth/login');
        cy.get('[data-test="email"]').type(createdEmail);
        cy.get('[data-test="password"]').type(password, { force: true });
        cy.get('[data-test="login-submit"]').click();
        cy.url().should('include', '/account');

        cy.visit('/');
        cy.get('.card img').should('be.visible').first().click();
        cy.get('[data-test="add-to-cart"]').click();

        cy.get('[data-test="nav-cart"]').click();
        cy.get('[data-test="proceed-1"]').click();
        cy.get('[data-test="house_number"]').type('3', { force: true });
        cy.get('[data-test="proceed-2"]').click();
        cy.get('[data-test="proceed-3"]').click();

        cy.get('[data-test="payment-method"]').select('Cash on Delivery');
        cy.get('[data-test="finish"]').click();
        cy.contains('Payment was successful').should('be.visible');


        
        
})

})