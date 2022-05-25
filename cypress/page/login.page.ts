class LoginPage {

    private emailField: string;
    private passwordField: string;
    private signInButton: string;

    constructor() {
        this.emailField = "#email";
        this.passwordField = "#passwd";
        this.signInButton = "#SubmitLogin > span";
    }

    public login(email:string, pass:string) {
        cy.get(this.emailField).type(email);
        cy.get(this.passwordField).type(pass);
        cy.get(this.signInButton).click();
    }
}

export { LoginPage }
