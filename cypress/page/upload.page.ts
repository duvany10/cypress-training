class UploadPage {
    private uploadDemoSiteUrl: string;
    private inputFile: string;
    private elementTittle: string;

    constructor() {
        this.uploadDemoSiteUrl = 'http://demo.automationtesting.in/FileUpload.html';
        this.inputFile = '#input-4';
        this.elementTittle = '.file-footer-caption';
    }

    visitUploadDemoSite(): void {
        cy.visit(this.uploadDemoSiteUrl);
    }

    uploadFile(fileName: string): void {
        cy.get(this.inputFile).attachFile(fileName);
    }

    getTittle() {
        return cy.get(this.elementTittle);
    }
}

export { UploadPage }
