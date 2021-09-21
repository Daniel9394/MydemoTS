///<reference types="Cypress" />

import Loginpage from '../../support/PageObject/Loginpage'
import Productpage from '../../support/PageObject/Productpage'

describe('Framework',function()
    {
        before(function()
        {
            cy.fixture('example').then(function(data)
            {
                this.data=data
            })

        })
        it('Test1',function()
            {
                const loginpage=new Loginpage()
                const productpage=new Productpage()
                cy.visit(Cypress.env('Url'))
               loginpage.getnamebox().type(this.data.name);
                loginpage.getgender().select(this.data.Gender)
                loginpage.btnshop().click()
                this.data.Product.forEach(function(element)
                {
                    cy.selectproduct(element)
                })
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
            }
        )
    }
)