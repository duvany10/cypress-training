class UploadPage {
    private uploadDemoSiteUrl: string;
    private inputFile: string;
    private uploadButton: string;
    private elementTittle: string;

    constructor() {
        this.uploadDemoSiteUrl = 'https://the-internet.herokuapp.com/upload';
        this.inputFile = '#file-upload';
        this.uploadButton = '#file-submit';
        this.elementTittle = '#uploaded-files';
    }

    visitUploadDemoSite(): void {
        cy.visit(this.uploadDemoSiteUrl);
    }

    uploadFile(fileName: string): void {
        cy.get(this.inputFile).attachFile(fileName);
        cy.get(this.uploadButton).click();
    }

    getTittle() {
        return cy.get(this.elementTittle);
    }
}

export { UploadPage }
