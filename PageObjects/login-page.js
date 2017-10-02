/* sign in/register page.js */

var SignInRegisterPage = function() {

    this.login_email = element(by.name('email'));
    this.login_password = element(by.name('password'));
    this.sign_in = element(by.buttonText('Sign in'));
    this.sign_up = element(by.css('[ui-sref="subscription({back : \'fromHeader\'})"]'));
    this.validation_messages = element.all(by.css('[ng-message="required"]'));
    this.invalid_email_or_password_message = element(by.xpath('//p[@class=\'ng-binding ng-scope\']'));

    this.login = function(email, password) {
        this.login_email.sendKeys(email);
        this.login_password.sendKeys(password);
        this.sign_in.click();
    };
};

module.exports = SignInRegisterPage;