class Productpage
{
    getbtncheckout()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
getfinalcheckout()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
gettxtcountry()
{
    return cy.get('#country')
}
getpopclick()
{
    return cy.get('.suggestions > ul > li > a')
}
getbtnCheckbox()
{
    return cy.get('.checkbox')
}
getbtnpurchase()
{
    return cy.get('.ng-untouched > .btn')
}
}
export default Productpage