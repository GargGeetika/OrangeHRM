
const url=Cypress.env('url')
import {dashboard} from './POM/dashboard';
import { sidePannel} from './POM/sidePannel';
import {addAdminUser} from './POM/addAdimUser';


describe('Automate the OrangeHRM page', () => {

    beforeEach(() => {
        // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      })

      after(() => {
        // Logout
        cy.Logout()
      })

    it('Login to OrangeHRM website', () => {
        cy.Login()
        
    });

    it('verifyDashboard',()=>{
        dashboard.verifyDashboard()

    })

    it('Verify the links on the side Pannel', () => {
        sidePannel.verifySidePannel()
        
    });

    it('Admin page', () => {
        addAdminUser.navigateToAddAdminUser()
        addAdminUser.fillAdminForm()        
    });

    // it('Logout of the site', () => {
    //     cy.Logout()
    // });

    
});