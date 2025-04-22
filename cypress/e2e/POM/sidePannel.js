let sidePannelNav='[class*="oxd-main-menu-item"] span'
let arrMenu=[
    'Admin',
    'PIM',
    'Leave',
    'Time',
    'Recruitment',
    'My Info',
    'Performance',
    'Dashboard',
    'Directory',
    'Maintenance',
    'Claim',
    'Buzz']

export class sidePannel{

    static verifySidePannel(){
        console.log("inside side pannel")
        cy.log("inside side pannel")
        cy.get(this.sidePannelNav).each(($el,index)=>{
            expect($el.text()).to.eql(this.arrMenu[index])
        })

    }
}