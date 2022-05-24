class AddressPage {

    private processToCheckoutButton: string;

    constructor() {
        this.processToCheckoutButton = ".cart_navigation > .button > span";
    }

    public processToCheckOut(): void {
        cy.get(this.processToCheckoutButton).click()
    }
}

export { AddressPage }