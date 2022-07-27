import {DownloadPage, UploadPage} from "../page";

let uploadPage: UploadPage;
let downloadPage: DownloadPage;

describe("Working with Files", () => {
  before(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
  });
  describe("Upload File", () => {
    it("Should have a Tittle", () => {
      // Arrange
      const fileName = "example.json";

      // Act
      uploadPage.visitUploadDemoSite();
      uploadPage.uploadFile(fileName);

      // Assert
      uploadPage.getTittle().should("contain.text", fileName);
    });
  });
  describe("Download File", () => {
    it("Should be in the download cypress folder", () => {
      downloadPage.visitDownloadDemoSite();
      downloadPage.downloadFile();
      downloadPage.getDownloadFile().should("exist");
    });
  });
});
