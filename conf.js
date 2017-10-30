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

    suites: {
        login: ['Suites/login-spec.js'],
        registration: ['Suites/registration-spec.js'],
        myAccount: ['Suites/my-account-spec.js'],
        f1Tickets: ['Suites/buy-f1-ticket-spec.js']
    },
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

    onPrepare: function () {

        //maximize browser window
        browser.driver.manage().window().maximize();

        //add custom reporters
        jasmine.getEnv().addReporter(jasmine2HtmlReporter);
        jasmine.getEnv().addReporter(specReporter);
    }
};