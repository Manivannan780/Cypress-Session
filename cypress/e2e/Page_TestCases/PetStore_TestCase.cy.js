/// <reference types ="Cypress" />

import PetStore_PageElements from "../Page_Elements/PetStore_PageElements.js"


let petStoreObj = new PetStore_PageElements()

describe("---PetStore Page Validation---", function () {
  
  before(
    "Loads the Login Page",
    function () {
      cy.Handling_Exception()
      cy.visit("/Catalog.action")
    }
  )

  beforeEach("Loading the External Data", function () {

    cy.fixture("PetStore").as("userData") //Loading External Data
  
  })


  it('TC:01- Verify that the user is able to verify the pet list in the Selected Pets Section.', function () {
    
    cy.Session_Login(this.userData.userName[0],this.userData.passWord[0])
    cy.visit('/Catalog.action');
    petStoreObj.checkProductsPageLoaded()
    petStoreObj.selectPetDetails(this.userData.petNames[0])
    petStoreObj.checkPetAvailableDetails(this.userData.userLikedPets[0])
    
  })


  it('TC:02- Verify that the user is able to login to the application using a Session Command', function () {
    
    cy.Session_Login(this.userData.userName[0],this.userData.passWord[0])
    cy.visit('/Catalog.action');
    petStoreObj.checkProductsPageLoaded()
    petStoreObj.selectPetDetails(this.userData.petNames[1])
    petStoreObj.checkPetAvailableDetails(this.userData.userLikedPets[1])
    
  })



  it('TC:03- Verify that the user is able to login to the application using a Session Command', function () {
    
    //User 1 - Session
    
    cy.Session_Login(this.userData.userName[1],this.userData.passWord[1])
    cy.visit('/Catalog.action');
    petStoreObj.checkProductsPageLoaded()
    petStoreObj.selectPetDetails(this.userData.petNames[2])
    petStoreObj.checkPetAvailableDetails(this.userData.userLikedPets[2])

    //User 2 - Session

    cy.Session_Login(this.userData.userName[1],this.userData.passWord[1])
    cy.visit('/Catalog.action');
    petStoreObj.checkProductsPageLoaded()
    petStoreObj.selectPetDetails(this.userData.petNames[2])
    petStoreObj.checkPetAvailableDetails(this.userData.userLikedPets[2])
    
  })



 
})
