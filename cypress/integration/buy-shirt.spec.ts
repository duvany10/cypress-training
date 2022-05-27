import {
  MenuContentPage, ProductListPage, ShoppingCartPage,
  LoginPage, AddressPage, ShippingPage, PaymentPage,
} from "../page/index";

let menuContentPage: MenuContentPage;
let productListPage: ProductListPage;
let shoppingCartPage: ShoppingCartPage;
let loginPage: LoginPage;
let addressPage: AddressPage;
let shippingPage: ShippingPage;
let paymentPage: PaymentPage;

let email: string;
let pass: string;

describe("Buy a t-shirt", () => {
  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressPage = new AddressPage();
    shippingPage = new ShippingPage();
    paymentPage = new PaymentPage();
    email = "aperdomobo@gmail.com";
    pass = "WorkshopProtractor";
  });
  it("then the t-shirt should be bought", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // Act
    productListPage.addTShirtToCart();
    shoppingCartPage.processToCheckOut();
    loginPage.login(email, pass);
    addressPage.processToCheckOut();
    shippingPage.chooseShippingOption();
    paymentPage.payByBankWire();
    paymentPage.confirmOrder();

    // Assert
    paymentPage.getConfirmationMessage().should("have.text", "Your order on My Store is complete.");
  });
});
