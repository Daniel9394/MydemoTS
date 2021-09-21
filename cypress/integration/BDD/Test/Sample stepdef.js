///<reference types="Cypress" />

import Loginpage from '../../../support/PageObject/Loginpage'
import Productpage from '../../../support/PageObject/Productpage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
const loginpage=new Loginpage()
 const productpage=new Productpage()

Given('Open the Url page',function()
{
    cy.visit(Cypress.env('Url'))

})
When('i added items to cart and click purchase',function()
{
    loginpage.getnamebox().type(this.data.name);
      loginpage.getgender().select(this.data.Gender)
     loginpage.btnshop().click()
    this.data.Product.forEach(function(element)
    {
          cy.selectproduct(element)
     })
})
Then('Select the country submit verify Thankyou',function()
{
    productpage.getbtncheckout().click()
    productpage.getfinalcheckout().click()
    productpage.gettxtcountry().type(this.data.Country)
    productpage.getpopclick().click()
    productpage.getbtnCheckbox().click()
    productpage.getbtnpurchase().click()
    cy.get('.alert').then(function(element)
    {
        const d=element.text()
        expect(d.includes("Success")).to.be.true
    })

})

When('Add name and Gender',function()
{
    loginpage.getnamebox().type(this.data.name);
      loginpage.getgender().select(this.data.Gender)
})
Then('select Shop button',function()
{
    loginpage.btnshop().click()
})