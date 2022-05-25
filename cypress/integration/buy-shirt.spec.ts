import {
  MenuContentPage, ProductListPage, ShoppingCartPage,
  LoginPage, AddressPage, ShippingPage, PaymentPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressPage = new AddressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();

const email = "aperdomobo@gmail.com";
const pass = "WorkshopProtractor";

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart();
    shoppingCartPage.processToCheckOut();
    loginPage.login(email, pass);
    addressPage.processToCheckOut();
    shippingPage.chooseShippingOption();
    paymentPage.payByBankWire();
    paymentPage.confirmOrder();
    cy.get(paymentPage.getConfirmationMessage())
        .should("have.text", "Your order on My Store is complete.");
  });
});
