class ShoppingCartPage {

    private processToCheckoutButton: string;

    constructor() {
        this.processToCheckoutButton = '.cart_navigation a[title="Proceed to checkout"]';
    }

    public processToCheckOut(): void {
        cy.get(this.processToCheckoutButton).click()
    }
}

export { ShoppingCartPage }
