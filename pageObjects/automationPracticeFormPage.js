import { BasePage } from "./basePage";

export class AutomationPracticeFormPage extends BasePage {

    static get url(){
        return"automation-practice-form";
    }

    static firstNameField(){
        return cy.get("#firstName");
    }

    static lastNameField(){
        return cy.get('#lastName') ;
    }

    static emailField(){
        return cy.get('#userEmail') ;
    }

    static genderRadio(){
        return cy.get('#genterWrapper') ;
    }

    static mobileField(){
        return cy.get('#userNumber') ;
    }
    
    static dateOfBirthField(){
        return cy.get('#dateOfBirthInput') ;
    }

    static dayPicker(){
        return cy.get('.react-datepicker__month') ;
    }

    static monthPicker(){
        return cy.get('.react-datepicker__month-select') ;
    }

    static yearPicker(){
        return cy.get('.react-datepicker__year-select') ;
    }
    
    static subjectsField(){
        return cy.get('.subjects-auto-complete__value-container') ;
    }

    static hobbiesCheckbox(){
        return cy.get('#hobbiesWrapper') ;
    }

    static uploadImage(){
        return cy.get('#uploadPicture') ;
    }

    static addressField(){
        return cy.get('#currentAddress') ;
    }

    static stateDropdown(){
        return cy.get('#state') ;
    }
    
    static cityDropdown(){
        return cy.get('#city') ;
    }
    
    static submitButton(){
        return cy.get('#submit') ;
    }

    static resultTable(){
        return cy.get('.table-responsive') ;
    }
}