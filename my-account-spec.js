/* My account test cases suite */
var testData = require('./TestData/test_data');
var LoginPage = require('./PageObjects/sign-in-register-page');
var MyAccountDefaultTab = require('./PageObjects/my-account-default-tab');
var OrderDetailsPage = require('./PageObjects/order-details-page');
var PdfVoucherPage = require('./PageObjects/print-pdf-voucher-page');
var MyAccountAddressesTab = require('./PageObjects/my-account-addresses-tab');
var CreateAddressPage = require('./PageObjects/create-address-page');

describe('My account test suite', function () {

    var login = new LoginPage();
    var myAccountPage = new MyAccountDefaultTab();
    var orderDetailsPage = new OrderDetailsPage();
    var pdfVoucherPage = new PdfVoucherPage();
    var addressesTab = new MyAccountAddressesTab();
    var createAddressPage = new CreateAddressPage();

    // login as registered user before tests
    beforeAll(function() {
        browser.get(testData.url.loginPageUrl);
        login.login(testData.credentials.registeredUserEmail, testData.credentials.registeredUserPassword);
    });

    it('Add new address to client valid test', function () {
        myAccountPage.my_addresses_link.click();
        addressesTab.add_ann_address.click();
        createAddressPage.enter_all_new_address_fields(testData.clientNewAddress.firstName, testData.clientNewAddress.surName, testData.clientNewAddress.company,
            testData.clientNewAddress.address, testData.clientNewAddress.business_address, testData.clientNewAddress.country, testData.clientNewAddress.postCode,
            testData.clientNewAddress.city, testData.clientNewAddress.mobile, testData.clientNewAddress.addressTitle);
        createAddressPage.submit.click();

        // assert that all fields are correctly saved
        expect(addressesTab.last_added_address.getText()).toContain(testData.clientNewAddress.firstName);
        expect(addressesTab.last_added_address.getText()).toContain(testData.clientNewAddress.surName);
        expect(addressesTab.last_added_address.getText()).toContain(testData.clientNewAddress.company);
        expect(addressesTab.last_added_address.getText()).toContain(testData.clientNewAddress.country);
        expect(addressesTab.last_added_address.getText()).toContain(testData.clientNewAddress.postCode);
        expect(addressesTab.last_added_address.getText()).toContain(testData.clientNewAddress.city);
        expect(addressesTab.last_added_address.getText()).toContain(testData.clientNewAddress.country);
        expect(addressesTab.last_added_address.getText()).toContain(testData.clientNewAddress.mobile);
        expect(addressesTab.address_title.getText()).toContain(testData.clientNewAddress.addressTitle);
    });

        it('Print E-voucher valid test', function () {
        myAccountPage.paymentAcceptedLink.click();
        orderDetailsPage.print_evoucher_icon.click();

        //assertion
        expect(pdfVoucherPage.clientName).toEqual(testData.orderDetail.clientName);
        expect(pdfVoucherPage.orderNumber).toEqual(testData.orderDetail.orderNumber);
    });
});