var testData = require('../TestData/test_data');
var LoginPage = require('../PageObjects/login-page');
var SiteMenuHeaderBlock = require('../PageObjects/site-menu-header-block');
var HomePage = require('../PageObjects/home-page');
var TicketShop = require('../PageObjects/ticket-shop-page');

describe('Buying f1 functionality suite', function () {

    var homePage = new HomePage();
    var login = new LoginPage();
    var header = new SiteMenuHeaderBlock();
    var ticketShop = new TicketShop();

    // login as registered user before tests
    beforeAll(function () {
        browser.get(testData.url.loginPageUrl);
        homePage.my_account_link.click();
        login.login(testData.credentials.registeredUserEmail, testData.credentials.registeredUserPassword);
    });


    it('Buy f1 ticket valid test', function () {
        header.formula1.click();
    });

});