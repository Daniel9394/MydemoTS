class Loginpage
{
getnamebox()
{
    return cy.get(':nth-child(1) > .form-control')
}
getgender()
{
    return cy.get('Select')
}
btnshop()
{
    return cy.get(':nth-child(2) > .nav-link')
}


} 
export default Loginpage;