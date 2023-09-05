/// <reference types ="Cypress" />


class PetStore_PageElements {

  //Login Page Elements

  userNameInput='input[name="username"]'
  passWordInput='input[name="password"]'
  loginBTN='input[name="signon"][type="submit"]'

 
  signOutBTN='div[id="MenuContent"] a[href*="sign"]'
  myAccountBTN='div[id="MenuContent"] a[href*="AccountForm"]'
  quickMenuLinks='[id="QuickLinks"] a'
  searchField='input[name="keyword"][type="text"]'
  searchBTN='input[name="searchProducts"][type="submit"]'
  sideMenuLinks='div[id="SidebarContent"] a'
  petLogo='div[id="LogoContent"] a img'


  petTitle = '[id="Catalog"] h2'
  petTableData = 'table tbody tr td:nth-child(2)'
  backBTN = 'div[id="BackLink"] a'




  checkProductsPageLoaded(){

    cy.get(this.signOutBTN).contains("Sign Out").should('be.visible')
    cy.get(this.myAccountBTN).contains("My Account").should('be.visible')
    cy.get(this.quickMenuLinks).should('have.length',5)
    cy.get(this.searchField).should('be.visible')
    cy.get(this.searchBTN).should('be.visible')
    cy.get(this.sideMenuLinks).should('have.length',5)
    cy.get(this.petLogo).should('be.visible')

  }


  selectPetDetails(petName) {

    cy.get(`[id="QuickLinks"] a[href*=${petName}]`).should('exist').click()
    cy.url().should('include', petName);
    cy.get(this.petTitle).contains(petName, { matchCase: false }).should('be.visible')
    cy.get(this.backBTN).contains("Return to Main Menu").should('be.visible')

  }



  checkPetAvailableDetails(userWantedPet) {

    cy.get(this.petTableData).each(($el, index, $list) => {
      cy.log($el.text());
      if ($el.text() == userWantedPet) {
        cy.log("Pet available in the Store")
      }
      else {
        cy.log("Pet Not available in the Store")
      }
      cy.wait(1000);

    })

  }



  performRefresh() {

    cy.reload()

  }





}

export default PetStore_PageElements

