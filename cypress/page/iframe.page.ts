class IframePage {

    private w3schoolSiteUrl: string;
    private defaulIframe: string;
    private cssTitle: string;
    constructor() {
        this.w3schoolSiteUrl = 'https://www.w3schools.com/html/html_iframe.asp';
        this.defaulIframe = '[src="default.asp"]';
        this.cssTitle = 'a[title="CSS Tutorial"]';        
    }

    public visit(): void {
        cy.visit(this.w3schoolSiteUrl);
    }

    public getFrameTitle() {
        return cy.iframe(this.defaulIframe);
    }

    public goToCssPageInFrame() {
        cy.iframe(this.defaulIframe).find(this.cssTitle).click();
    }    
}

export { IframePage }
