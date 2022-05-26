class ShippingPage {

    private termOfServceCheck: string;
    private processToCheckoutButton: string;

    constructor() {
        this.termOfServceCheck = "#cgv";
        this.processToCheckoutButton = '.cart_navigation > button[name="processCarrier"] > span';
    }

    public chooseShippingOption() {
        cy.get(this.termOfServceCheck).click();
        cy.get(this.processToCheckoutButton).click();
    }

}

export { ShippingPage }
