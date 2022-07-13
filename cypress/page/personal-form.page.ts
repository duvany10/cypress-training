class PersonalFormPage {

    private nameInput: string;
    private lastNameInput: string;
    private emailInput: string;
    private genderRadio: string;
    private mobileNumberInput: string;
    private hobbiesCheck: string;
    private currentAddressTextArea: string;
    private submitButton: string;

    constructor() {
        this.nameInput = '#firstName'
        this.lastNameInput = '#lastName';
        this.emailInput = '#userEmail';
        this.genderRadio = '[type="radio"]';
        this.mobileNumberInput = '#userNumber';
        this.hobbiesCheck = '[type="checkbox"]';
        this.currentAddressTextArea = '#currentAddress';
        this.submitButton = '#submit';
    }

    fillForm(personalInformation: {
        name: string, lastName: string, email: string,
        mobileNumber: string, hobbies: string[], currentAddress: string
    }) {
        cy.get(this.nameInput).type(personalInformation.name);
        cy.get(this.lastNameInput).type(personalInformation.lastName);
        cy.get(this.emailInput).type(personalInformation.email);
        cy.get(this.genderRadio).check("Male", { force: true });
        cy.get(this.mobileNumberInput).type(personalInformation.mobileNumber);
        cy.get(this.hobbiesCheck).check(personalInformation.hobbies, { force: true });
        cy.get(this.currentAddressTextArea).type(personalInformation.currentAddress);
        cy.get(this.submitButton).click({force:true});        
    }
}

export { PersonalFormPage }
