
import { adminFormSelectors } from "./adminSelectors";

let sidePannelNavAdmin='[class*="oxd-main-menu-item"] span'
let btnAdddAdmin='button[type="button"]'

export class addAdminUser{

    static navigateToAddAdminUser(){
        cy.log("inside")
        cy.get(this.sidePannelNavAdmin).each(($el,index)=>{
            cy.log($el.text())
            if(($el.text()).to.eql('Admin')){
                $el.click()
            }
            cy.get(this.btnAdddAdmin).click()
        })
    }

    static fillAdminForm(){

        adminFormSelectors.userRole().clear()
        adminFormSelectors.userRole().type("Ram")

    }
}