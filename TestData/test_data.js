/* Test data for cases*/

var randomstring = require("randomstring");

var testData = {
    credentials: {
        registeredUserEmail: 'employee-boo@platinium-group.org',
        registeredUserPassword: '123123'
    },
    url: {
        loginPageUrl: 'https://ticketsyasmarinacircuit.com/8481-driving-experiences/en/experiences/home/',
        defaultUrl: 'https://ticketsyasmarinacircuit.com'
    },
    orderDetail: {
        orderNumber: 1,
        clientName: 'Andi Din'
    },
    clientNewAddress: {
        firstName: 'Ben',
        surName: 'Torrent',
        company: 'Echo',
        isThisBusinessAddress: 'NO',
        address: '22 West',
        country: 'USA',
        postCode: '10001',
        city: 'NY',
        mobile: '123456789',
        addressTitle: 'Home Address'
    },
    newClientInfo: {
        email: randomstring.generate(10) + '@gmail.com',
        password: 'somePass999',
        gender: 'Mr.',
        nationality: 'USA',
        dateOfBirth: {
            day: 1,
            month: '01',
            year: 1992
        },
        city: 'NY',
        phone_number: '123456789',
        isFirsTime: 'Yes'
    },
    clientNewPersonalData: {
        firstName: 'Ivan',
        surName: 'Byno',
        title: 'Mr.',
        email: 'employee-boo@platinium-group.org',
        mobile: '12232312323',
        nationality: 'USA'
    }
};

module.exports = testData;