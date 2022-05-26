class AddressPage {

    private processToCheckoutButton: string;

    constructor() {
        this.processToCheckoutButton = 'button[name="processAddress"]';
    }

    public processToCheckOut(): void {
        cy.get(this.processToCheckoutButton).click()
    }
}

export { AddressPage }
