/* sign in/register page.js */

var SiteMenuHeaderBlock = require('./site-menu-header-block.js');

var SignInRegisterPage = function() {


    var headerBlock = new SiteMenuHeaderBlock();

    this.login_email = element(by.name('email'));
    this.login_password = element(by.name('password'));
    this.sign_in = element(by.buttonText('Sign in'));

    this.login = function(email, password) {
        headerBlock.my_account.click();
        this.login_email.sendKeys(email);
        this.login_password.sendKeys(password);
        this.sign_in.click();
    };
};

module.exports = SignInRegisterPage;