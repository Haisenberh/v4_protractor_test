/* My account default tab */
var MyAccountDefaultTab = function () {
    this.ordersTable = element.all(by.xpath('//a[@class=\'ng-binding ng-scope\']'));
    this.paymentAcceptedLink = this.ordersTable.last();
    this.my_addresses_link = element.all(by.xpath('//a[@class=\'account__menu__link ng-binding\']')).first();
};

module.exports = MyAccountDefaultTab;