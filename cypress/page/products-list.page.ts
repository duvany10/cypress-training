class ProductListPage {
    private addToCartButton: string;
    private processToCheckOutButton: string;

    constructor() {
        this.addToCartButton = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.processToCheckOutButton = '.button-container > a[title="Proceed to checkout"]';

    }

    public addTShirtToCart():void {
        cy.get(this.addToCartButton).click();
        cy.get(this.processToCheckOutButton).click();
    }
}

export { ProductListPage }
