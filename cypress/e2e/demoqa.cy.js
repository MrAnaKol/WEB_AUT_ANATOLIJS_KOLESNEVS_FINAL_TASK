import { AutomationPracticeFormPage } from "../../pageObjects/automationPracticeFormPage";

describe('Final Task', () => {
  context("Practice Form", () => {
      beforeEach(() => {
        AutomationPracticeFormPage.visit();
      })

      it('Fill Practice Form', () => {
        AutomationPracticeFormPage.firstNameField().type("Anatolijs");
        AutomationPracticeFormPage.lastNameField().type("Koļesņevs");
        AutomationPracticeFormPage.emailField().type("s22koleanat@venta.lv");
        AutomationPracticeFormPage.genderRadio().contains('Male').click();
        AutomationPracticeFormPage.mobileField().type("22334455");
        AutomationPracticeFormPage.dateOfBirthField().click();
        AutomationPracticeFormPage.monthPicker().select('February');
        AutomationPracticeFormPage.yearPicker().select('1930');
        AutomationPracticeFormPage.dayPicker().contains("28").click();
        AutomationPracticeFormPage.subjectsField().type("Economics{enter}");
        AutomationPracticeFormPage.hobbiesCheckbox().contains("Music").click();
        AutomationPracticeFormPage.uploadImage().selectFile('files/BruniUnBernards.jpeg');
        AutomationPracticeFormPage.addressField().type('123 Cypress Lane, Test City');
        AutomationPracticeFormPage.stateDropdown().click();
        cy.contains("div", "NCR").click();
        AutomationPracticeFormPage.cityDropdown().click();
        cy.contains("div", "Delhi").click();
        AutomationPracticeFormPage.submitButton().click();
        AutomationPracticeFormPage.resultTable().should('contain.text', 'Anatolijs Koļesņevs');
        AutomationPracticeFormPage.resultTable().should('contain.text', 's22koleanat@venta.lv');
        AutomationPracticeFormPage.resultTable().should('contain.text', 'Male');
        AutomationPracticeFormPage.resultTable().should('contain.text', 'Anatolijs Koļesņevs');
        AutomationPracticeFormPage.resultTable().should('contain.text', '22334455');
        AutomationPracticeFormPage.resultTable().should('contain.text', 'Economics');
        AutomationPracticeFormPage.resultTable().should('contain.text', 'Music');
        AutomationPracticeFormPage.resultTable().should('contain.text', 'BruniUnBernards.jpeg');
        AutomationPracticeFormPage.resultTable().should('contain.text', 'NCR Delhi');
      })
  });
})