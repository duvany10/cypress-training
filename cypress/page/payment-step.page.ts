class PaymentPage {

    private payByBankWireButton: string;
    private confirmButton: string;
    public confirmeMessage:string;

    constructor() {
        this.payByBankWireButton = ".bankwire";
        this.confirmButton = "#cart_navigation > .button > span";
        this.confirmeMessage = "#center_column > div > p > strong";
    }

    public payByBankWire() {
        cy.get(this.payByBankWireButton).click();
    }

    public confirmOrder() {
        cy.get(this.confirmButton).click();
    }
}

export { PaymentPage }