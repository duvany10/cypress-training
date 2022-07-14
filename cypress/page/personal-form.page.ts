class PersonalFormPage {

    private nameInput: string;
    private lastNameInput: string;
    private emailInput: string;
    private genderRadio: string;
    private mobileNumberInput: string;
    private hobbiesCheck: string;
    private currentAddressTextArea: string;
    private submitButton: string;
    private stateSelect: string;
    private citySelect: string;
    private NCROption: string;
    private delhiOption: string;

    constructor() {
        this.nameInput = '#firstName'
        this.lastNameInput = '#lastName';
        this.emailInput = '#userEmail';
        this.genderRadio = '[type="radio"]';
        this.mobileNumberInput = '#userNumber';
        this.hobbiesCheck = '[type="checkbox"]';
        this.currentAddressTextArea = '#currentAddress';
        this.submitButton = '#submit';
        this.stateSelect = "#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder";
        this.citySelect = "#city > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder";
        this.NCROption = "#react-select-3-option-0";
        this.delhiOption = "#react-select-4-option-0";

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
        cy.get(this.stateSelect).click({force:true});
        cy.get(this.NCROption).click();
        cy.get(this.citySelect).click({force:true});   
        cy.get(this.delhiOption).click();
        cy.get(this.submitButton).click({force:true});        
    }
}

export { PersonalFormPage }
