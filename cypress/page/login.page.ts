class LoginPage {

    private emailField: string;
    private passwordField: string;
    private signInButton: string;

    constructor() {
        this.emailField = "#email";
        this.passwordField = "#passwd";
        this.signInButton = "#SubmitLogin > span";
    }

    public login() {
        cy.get(this.emailField).type("aperdomobo@gmail.com");
        cy.get(this.passwordField).type("WorkshopProtractor");
        cy.get(this.signInButton).click();
    }
}

export { LoginPage }