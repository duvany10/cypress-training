import {IframePage} from "../page";

let iframePage: IframePage;

describe("Working with Iframes", () => {
  before(() => {
    iframePage = new IframePage();
    iframePage.visit();
  });
  describe("When the user go the HTML page", () => {
    it("Should have the Title 'HTML Tutorial'", () => {
      const HTMLTutorialExpected = "HTML Tutorial";
      iframePage.getFrameTitle().should("contain.text", HTMLTutorialExpected);
    });
  });
  describe("When the user go the CSS page", () => {
    it("Should have the title 'CSS Tutorial'", () => {
      const CSSTutorialExpected = "CSS Tutorial";
      iframePage.goToCssPageInFrame();
      iframePage.getFrameTitle().should("contain.text", CSSTutorialExpected);
    });
  });
});
