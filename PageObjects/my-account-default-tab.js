/* My account default tab */
//var EC = protractor.ExpectedConditions;

var MyAccountDefaultTab = function () {
    this.ordersTable = element.all(by.xpath('//a[@class=\'ng-binding ng-scope\']'));
    this.paymentAcceptedLink = this.ordersTable.first();
    this.order_history_welcome_text = element(by.css('[ng-if="currentTab == \'history\'"]'));
    this.my_addresses_link = element(by.css('[ui-sref="account.addresses"]'));
    this.personal_info_link = element(by.css('[ui-sref="account.information"]'));
};

module.exports = MyAccountDefaultTab;