/* My account page.js */
var MyAccountPage = function () {
    this.ordersTable = element.all(by.xpath('//a[@class=\'ng-binding ng-scope\']'));
    this.paymentAcceptedLink = this.ordersTable.last();
};

module.exports = MyAccountPage;