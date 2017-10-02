/* My account addresses tab */
var MyAccountAddressesTab = function () {
    this.add_ann_address = element(by.xpath('//a[@class=\'ng-binding ng-scope\']'));
    this.last_added_address = element.all(by.css('[ng-if="addresses.length"]')).last();
    this.address_title = element.all(by.xpath('//div[@class=\'addresses__address__title\']')).first();

    this.delete_address = element(by.css('[ng-click="deleteAddress(address)"]'));
    this.successful_delete_message = element(by.xpath('//div[@class = \'goom_error\']'));
};

module.exports = MyAccountAddressesTab;