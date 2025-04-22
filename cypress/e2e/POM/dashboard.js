
let userDropDownName='[class="oxd-userdropdown-name"]';
const userName=""



export class dashboard{

    static verifyDashboard(){
        cy.get(userDropDownName).then((userName)=>{
           this.userName= userName.text()
           cy.log(this.userName)
        })
    }    

}