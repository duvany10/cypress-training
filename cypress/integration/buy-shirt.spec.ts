import {MenuContentPage, ProductListPage, ShoppingCartPage,
  LoginPage, AddressPage, ShippingPage, PaymentPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const producrListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressPage = new AddressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    producrListPage.addTShirtToCart();
    shoppingCartPage.processToCheckOut();
    loginPage.login();
    addressPage.processToCheckOut();
    shippingPage.chooseShippingOption();
    paymentPage.payByBankWire();
    paymentPage.confirmOrder();
    cy.get(paymentPage.confirmeMessage)
        .should("have.text", "Your order on My Store is complete.");
  });
});
