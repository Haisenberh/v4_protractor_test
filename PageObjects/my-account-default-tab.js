/* My account default tab */
var MyAccountDefaultTab = function () {
    this.ordersTable = element.all(by.xpath('//a[@class=\'ng-binding ng-scope\']'));
    this.paymentAcceptedLink = this.ordersTable.last();
    this.my_addresses_link = element(by.css('[ui-sref="account.addresses"]'));
    this.personal_info_link = element(by.css('[ui-sref="account.information"]'));
};

module.exports = MyAccountDefaultTab;