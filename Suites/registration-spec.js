/* My account test cases suite */
var testData = require('../TestData/test_data');
var LoginPage = require('../PageObjects/login-page');
var HomePage = require('../PageObjects/home-page');
var SignUpPage = require('../PageObjects/sign-up-page.js');
var MyAccountDefaultTab = require('../PageObjects/my-account-default-tab.js');

describe('Registration suite', function () {

    var login = new LoginPage();
    var homePage = new HomePage();
    var signUpPage = new SignUpPage();
    var myAccountDefaultTab = new MyAccountDefaultTab();

    // login as registered user before tests
    beforeAll(function () {
        browser.get(testData.url.loginPageUrl);
        homePage.my_account_link.click();
        login.sign_up.click();
    });

    it('Register new user valid test', function () {
        signUpPage.email.sendKeys(testData.newClientInfo.email);
        signUpPage.password.sendKeys(testData.newClientInfo.password);
        signUpPage.confirm_password.sendKeys(testData.newClientInfo.password);
        signUpPage.phone_number.sendKeys(testData.newClientInfo.phone_number);
        signUpPage.gender.sendKeys(testData.newClientInfo.gender);

        signUpPage.birth_day.sendKeys(testData.newClientInfo.dateOfBirth.day);
        signUpPage.birth_month.sendKeys(testData.newClientInfo.dateOfBirth.month);
        signUpPage.birth_year.clear().sendKeys(testData.newClientInfo.dateOfBirth.year);
        signUpPage.is_first_time.sendKeys(testData.newClientInfo.isFirsTime);
        signUpPage.selectItemInNationalityDropdown('USA');
        signUpPage.sign_up.click();

        expect(myAccountDefaultTab.order_history_welcome_text.getText()).toContain('Welcome to your order history.');
        expect(myAccountDefaultTab.order_history_welcome_text.getText()).toContain('Here are the orders you have placed since the creation of your account.');
        expect(myAccountDefaultTab.order_history_welcome_text.getText()).toContain('No orders were found.');
    });

});