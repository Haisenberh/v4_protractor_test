/* Configuration for protractor */
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['my-account-spec.js'],
    capabilities: {
        browserName: 'firefox'
    },
    resultJsonOutputFile:'./testResults.json' //file with reports
};