/* Create address page */
var PersonalInfoPage = function () {
    this.title = element(by.id('input_title'));
    this.first_name = element(by.id('firstname'));
    this.surname = element(by.id('lastname'));
    this.email = element(by.id('email'));
    this.current_password = element(by.id('currentPassword'));
    this.password = element(by.id('password'));
    this.password_confirmation = element(by.id('passwordConfirmation'));
    this.birthday_day = element(by.id('input_day'));
    this.birthday_month = element(by.id('input_month'));
    this.birthday_year = element(by.id('input_year'));
    this.phone_number = element(by.id('contact_number'));
    this.nationality= element(by.id('nationality'));
    this.nationality_usa_item = element(by.xpath('//option[@value=\'21\']'));
    this.save = element(by.buttonText('Save'));

    this.selectTitle = function (title) {
        this.title.sendKeys(title);
    };

    this.enterFirstName = function (first_name) {
        this.first_name.clear().sendKeys(first_name);
    };

    this.enterSurname = function (last_name) {
        this.surname.clear().sendKeys(last_name);
    };

    this.enterEmail = function (email) {
        this.email.clear().sendKeys(email);
    };

    this.enterPhone = function (phone) {
        this.phone_number.clear().sendKeys(phone);
    };

    this.selectUsaNationality = function (nationality) {
        this.nationality_usa_item.click();
    };


};

module.exports = PersonalInfoPage;