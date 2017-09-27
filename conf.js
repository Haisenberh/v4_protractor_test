/* Configuration for protractor */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var specReporter = new SpecReporter({
    spec: {
        displayStacktrace: false,
        displayErrorMessages: true
    }
});


var jasmine2HtmlReporter = new Jasmine2HtmlReporter({
    savePath: './Reports',
    screenshotsFolder: './screenshots',
    cleanDestination: true,
    takeScreenshots: true,
    takeScreenshotsOnlyOnFailures: true,
    showPassed: false,
    fileNameDateSuffix: true
});


exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['my-account-spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            prefs: {
                //settings for automatically download all files without prompt
                download: {
                    prompt_for_download: false,
                    directory_upgrade: true,
                    default_directory: './Download'
                }
            }
        }
    },
    resultJsonOutputFile: './Reports/testResults.json', //file with reports,

    //add custom reporters to jasmine
    onPrepare: function () {
        jasmine.getEnv().addReporter(jasmine2HtmlReporter);
        jasmine.getEnv().addReporter(specReporter);
    }

};