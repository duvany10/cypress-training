class ShippingPage {

    private termOfServceCheck: string;
    private processToCheckoutButton: string;

    constructor() {
        this.termOfServceCheck = "#cgv";
        this.processToCheckoutButton = 'button[name="processCarrier"]';
    }

    public chooseShippingOption() {
        cy.get(this.termOfServceCheck).click();
        cy.get(this.processToCheckoutButton).click();
    }

}

export { ShippingPage }
