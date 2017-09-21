/* My account test cases suite */

var testData = require('./TestData/test_data');
var LoginPage = require('./PageObjects/sign-in-register-page');
var MyAccountPage = require('./PageObjects/my-account-page');
var OrderDetailsPage = require('./PageObjects/order-details-page');
var PdfVoucherPage = require('./PageObjects/print-pdf-voucher-page');

describe('My account test suite', function () {

    var login = new LoginPage();
    var myAccountPage = new MyAccountPage();
    var orderDetailsPage = new OrderDetailsPage();
    var pdfVoucherPage = new PdfVoucherPage();

    it('Print E-voucher valid test', function () {

        browser.get(testData.url.loginPageUrl);
        login.login(testData.credentials.registeredUserEmail, testData.credentials.registeredUserPassword);
        myAccountPage.paymentAcceptedLink.click();
        orderDetailsPage.print_evoucher_icon.click();

        //assertion
        expect(pdfVoucherPage.clientName).toEqual(testData.orderDetail.clientName);
        expect(pdfVoucherPage.orderNumber).toEqual(testData.orderDetail.orderNumber);
    });
});