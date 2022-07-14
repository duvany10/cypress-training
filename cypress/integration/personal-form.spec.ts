import {PersonalFormPage} from "../page/personal-form.page";
let personalFormPage: PersonalFormPage;

describe("Personal form page", () => {
  before(() => {
    personalFormPage = new PersonalFormPage();
  });
  it("should have a title", () => {
    // Arrange
    const reading = "2";
    const music = "3";
    const personalInformation = {
      name: "Duvan",
      lastName: "Ganan",
      email: "duviiganan@email.com",
      gender: "Male",
      mobileNumber: "3656589156",
      hobbies: [reading, music],
      currentAddress: "Av siempreViva # 123",
    };
    cy.visit("https://demoqa.com/automation-practice-form");

    // Act
    personalFormPage.fillForm(personalInformation);

    // Assert
    cy.get("tbody tr")
        .should("contain.text", `${personalInformation.name} ${personalInformation.lastName}`)
        .should("contain.text", personalInformation.email)
        .should("contain.text", personalInformation.gender)
        .should("contain.text", personalInformation.mobileNumber)
        .should("contain.text", "Reading, Music")
        .should("contain.text", personalInformation.currentAddress);
  });
});
