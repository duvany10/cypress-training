class PaymentPage {

    private payByBankWireButton: string;
    private confirmButton: string;
    private confirmeMessage:string;

    constructor() {
        this.payByBankWireButton = ".bankwire";
        this.confirmButton = "#cart_navigation > .button > span";
        this.confirmeMessage = "#center_column > .box > .cheque-indent > .dark";
    }

    public payByBankWire() {
        cy.get(this.payByBankWireButton).click();
    }

    public confirmOrder() {
        cy.get(this.confirmButton).click();
    }

    public getConfirmationMessage(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.confirmeMessage);
    }
}

export { PaymentPage }
