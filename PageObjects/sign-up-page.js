/* sign in/register page.js */
var SignUpPage = function () {

    this.email = element(by.id('email'));
    this.password = element(by.id('password'));
    this.confirm_password = element(by.id('passwordConfirm'));
    this.phone_number = element(by.id('contact_number'));
    this.gender = element(by.id('gender'));
    this.nationality = element(by.id('nationality'));
    this.birth_day = element(by.id('birthDay'));
    this.birth_month = element(by.id('birthMonth'));
    this.birth_year = element(by.id('birthYear'));
    this.is_first_time = element(by.id('isFirstTime'));
    this.sign_up = element(by.buttonText('Sign up'));

    this.selectItemInNationalityDropdown = function (country) {
        this.nationality.element(by.cssContainingText('option', country)).click();
    };


    this.invalid_email_or_password_message = element(by.xpath('//p[@class=\'ng-binding ng-scope\']'));

};

module.exports = SignUpPage;