/* My account test cases suite */
var fs = require('fs');
var testData = require('../TestData/test_data');
var LoginPage = require('../PageObjects/login-page');
var MyAccountDefaultTab = require('../PageObjects/my-account-default-tab');
var OrderDetailsPage = require('../PageObjects/order-details-page');
var MyAccountAddressesTab = require('../PageObjects/my-account-addresses-tab');
var CreateAddressPage = require('../PageObjects/create-address-page');
var PersonalInfoPage = require('../PageObjects/personal-info-tab');
var HomePage = require('../PageObjects/home-page');

describe('My account test suite', function () {

    var homePage = new HomePage();
    var login = new LoginPage();
    var myAccountPage = new MyAccountDefaultTab();
    var orderDetailsPage = new OrderDetailsPage();
    var addressesTab = new MyAccountAddressesTab();
    var createAddressPage = new CreateAddressPage();
    var personalInfoPage = new PersonalInfoPage();

    // login as registered user before tests
    beforeAll(function () {
        browser.get(testData.url.loginPageUrl);
        homePage.my_account_link.click();
        login.login(testData.credentials.registeredUserEmail, testData.credentials.registeredUserPassword);
    });

    it('Add new address to client valid test', function () {
        homePage.my_account_link.click();
        myAccountPage.my_addresses_link.click();
        addressesTab.add_ann_address.click();
        createAddressPage.enterAllNewAddressFields(testData.clientNewAddress.firstName, testData.clientNewAddress.surName, testData.clientNewAddress.company,
            testData.clientNewAddress.address, testData.clientNewAddress.isThisBusinessAddress, testData.clientNewAddress.country, testData.clientNewAddress.postCode,
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

    it('Delete client address valid test', function () {
        addressesTab.delete_address.click();
        expect(addressesTab.successful_delete_message.getText()).toEqual('Your address has been deleted');
    });

    it('Change required personal data valid test', function () {
        homePage.my_account_link.click();
        myAccountPage.personal_info_link.click();
        personalInfoPage.selectTitle(testData.clientNewPersonalData.title);
        personalInfoPage.enterFirstName(testData.clientNewPersonalData.firstName);
        personalInfoPage.enterSurname(testData.clientNewPersonalData.surName);
        personalInfoPage.enterEmail(testData.clientNewPersonalData.email);
        personalInfoPage.enterPhone(testData.clientNewPersonalData.mobile);
        personalInfoPage.selectUsaNationality();
        personalInfoPage.save.click();

        //assert fields are correctly saved
        expect(personalInfoPage.title.getText()).toContain(testData.clientNewPersonalData.title);
        expect(personalInfoPage.first_name.getAttribute('value')).toEqual(testData.clientNewPersonalData.firstName);
        expect(personalInfoPage.surname.getAttribute('value')).toEqual(testData.clientNewPersonalData.surName);
        expect(personalInfoPage.email.getAttribute('value')).toEqual(testData.clientNewPersonalData.email);
        expect(personalInfoPage.phone_number.getAttribute('value')).toEqual(testData.clientNewPersonalData.mobile);
    });

    it('Download experience voucher valid test', function () {
        browser.get(testData.url.loginPageUrl);
        homePage.my_account_link.click();
        myAccountPage.paymentAcceptedLink.click();
        orderDetailsPage.print_evoucher_icon.click();
        browser.driver.wait(function () {
            //wait until file is downloaded
            return fs.existsSync('./Download/e-voucher.pdf');
        }, 10000).then(function () {
            expect(fs.existsSync('./Download/e-voucher.pdf'));
        });
    });

});