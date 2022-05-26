class AddressPage {

    private processToCheckoutButton: string;

    constructor() {
        this.processToCheckoutButton = '.cart_navigation > button[name="processAddress"] > span';
    }

    public processToCheckOut(): void {
        cy.get(this.processToCheckoutButton).click()
    }
}

export { AddressPage }
