# End to end tests for v4 sites

## Setup

**Protractor 5 is compatible with nodejs v6 and newer.**

Use npm to install Protractor globally with:

>*npm install -g protractor*

This will install two command line tools, protractor and *webdriver-manager*.
Try running *protractor --version* to make sure it's working.

The *webdriver-manager* is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

>*webdriver-manager update*

Now start up a server with:

>*webdriver-manager start*

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at *http://localhost:4444/wd/hub.*

Reporting:

HTML reporter for Jasmine2 and Protractor that will include screenshots of each test if you want. 

>*npm install protractor-jasmine2-html-reporter --save-dev*

Configuration

All Protractor configuration listed in *conf.js* file

Run the test

>*protractor conf.js*

Usefull links:

Protractor site: (http://www.protractortest.org/#/)

Reports: (https://www.npmjs.com/package/protractor-jasmine2-html-reporter)

