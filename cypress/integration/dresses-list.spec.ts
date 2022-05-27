import {MenuContentPage, DressesListPage} from "../page/index";

describe("The user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("Show the available dresses", () => {
    // Arrange
    const expectedNames = [
      "Printed Dress", "Printed Dress", "Printed Summer Dress",
      "Printed Summer Dress", "Printed Chiffon Dress",
    ];
    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToDressesMenu();

    // Assert
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsName(expectedNames);
  });
});
