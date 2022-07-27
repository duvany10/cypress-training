class DownloadPage {
    private downloadDemoSiteUrl: string;
    private downloadButton: string;
    private fileDownloadPath: string;

    constructor() {
        this.downloadDemoSiteUrl = 'https://demoqa.com/upload-download';
        this.downloadButton = '#downloadButton';
        this.fileDownloadPath = 'cypress/downloads/sampleFile.jpeg';
    }

    visitDownloadDemoSite(): void {
        cy.visit(this.downloadDemoSiteUrl);
    }

    downloadFile(): void {
        cy.get('#downloadButton').click();
    }

    getDownloadFile() {
        return cy.readFile(this.fileDownloadPath);
    }
}

export { DownloadPage }
