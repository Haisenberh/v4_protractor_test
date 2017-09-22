/* Configuration for protractor */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['my-account-spec.js'],
    capabilities: {
        browserName: 'firefox'
    },
    resultJsonOutputFile:'./Reports/testResults.json', //file with reports,

    // html report
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './Reports'
            })
        );
    }
};