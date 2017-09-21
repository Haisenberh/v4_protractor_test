/* Configuration for protractor */
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['my-account-spec.js'],
    capabilities: {
        browserName: 'firefox'
    }
};