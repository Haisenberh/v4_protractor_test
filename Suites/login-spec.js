/* My account test cases suite */
var testData = require('../TestData/test_data');
var LoginPage = require('../PageObjects/login-page');
var HomePage = require('../PageObjects/home-page');

describe('Login test suite', function () {

    var login = new LoginPage();
    var homePage = new HomePage();

    // login as registered user before tests
    beforeAll(function () {
        browser.get(testData.url.loginPageUrl);
        homePage.my_account_link.click();
    });

    // login as registered user before tests
    afterEach(function () {
        login.login_email.clear();
        login.login_password.clear();
    });

    it('Login without entering login and password fields', function () {
        homePage.my_account_link.click();
        login.sign_in.click();

        expect((login.validation_messages.first()).isEnabled()).toBe(true);
        expect((login.validation_messages.last()).isEnabled()).toBe(true);
    });

    it('Login without entering password fields', function () {
        login.login(testData.credentials.registeredUserEmail, '');
        login.sign_in.click();

        expect((login.validation_messages.last()).isEnabled()).toBe(true);
    });

    it('Login with valid email and incorrect password', function () {
        login.login(testData.credentials.registeredUserEmail, 'wrongPassword');
        login.sign_in.click();

        expect((login.invalid_email_or_password_message).isEnabled()).toBe(true);
    });

});