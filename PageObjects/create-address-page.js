/* Create address page */
var CreateAddressPage = function () {
    this.first_name = element(by.id('firstname'));
    this.surname = element(by.id('lastname'));
    this.company = element(by.id('company'));
    this.address = element(by.id('address'));
    this.business_address = element(by.id('business_address'));
    this.country = element(by.id('country'));
    this.post_code = element(by.id('postcode'));
    this.city_town = element(by.id('city'));
    this.mobile = element(by.id('phone'));
    this.address_title = element(by.id('address_title'));
    this.submit = element(by.id('addressSubmit'));
    this.country_usa_item = element(by.xpath('//option[@value=\'21\']'));

    this.enterAllNewAddressFields = function (first_name, surname, company, address, business_address, country, post_code, city_town, mobile, address_title) {
        this.first_name.sendKeys(first_name);
        this.surname.sendKeys(surname);
        this.company.sendKeys(company);
        this.address.sendKeys(address);
        this.business_address.sendKeys(business_address);
        this.country_usa_item.click();
        this.post_code.sendKeys(post_code);
        this.city_town.sendKeys(city_town);
        this.mobile.sendKeys(mobile);
        this.address_title.sendKeys(address_title);
    };
};

module.exports = CreateAddressPage;