class ProductListPage {
    private addToCartButton: string;
    private processToCheckOutButton: string;
    private productList: string;

    constructor() {
        this.addToCartButton = "a.button.ajax_add_to_cart_button.btn.btn-default";
        this.processToCheckOutButton = '.button-container > a[title="Proceed to checkout"]';
        this.productList = ".right-block";
    }

    private findProductByName(productName: string): any {
        return cy.get(this.productList).filter(`:contains("${productName}")`)
    }

    public addTShirtToCart(productName: string): void {
        this.findProductByName(productName).find(this.addToCartButton).click();
        cy.get(this.processToCheckOutButton).click();
    }
}

export { ProductListPage }
