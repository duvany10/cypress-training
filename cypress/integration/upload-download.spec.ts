import { MenuContentPage, UploadPage } from '../page';

let uploadPage: UploadPage;

describe('Upload File', () => {
    before(() => {
        uploadPage = new UploadPage();
    })
    it("Should have a Tittle", () => {
        //Arrange
        const fileName = 'example.json';

        //Act
        uploadPage.visitUploadDemoSite();
        uploadPage.uploadFile(fileName);

        //Assert
        uploadPage.getTittle().should('contain.text', fileName);
    })
})
