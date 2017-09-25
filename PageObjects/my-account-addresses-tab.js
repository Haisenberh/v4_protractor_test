/* My account addresses tab */
var MyAccountAddressesTab = function () {
    this.add_ann_address = element(by.xpath('//a[@class=\'ng-binding ng-scope\']'));
    this.last_added_address = element.all(by.xpath('//div[@class=\'addresses ng-scope\']')).last();
    this.address_title = element.all(by.xpath('//div[@class=\'addresses__address__title\']')).first();
};

module.exports = MyAccountAddressesTab;