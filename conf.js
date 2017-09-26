/* Configuration for protractor */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

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
    resultJsonOutputFile:'./Reports/testResults.json', //file with reports,

    // html report
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './Reports'
            })
        );
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new SpecReporter({
            spec: {
                displayStacktrace: false,
                displayErrorMessages: true
            }
        }));
    }
};