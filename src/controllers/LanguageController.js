const DatabaseController = require('./DatabaseController');

const testData = [
    {
        "locale": "en",
        "category": "product",
        "data": [
            "Random English text"
        ]
    },

    {
        "locale": "ar",
        "category": "product",
        "data": [
            "Random Arabic text"
        ]
    },
];

module.exports = {
    getData(locale) {
        let data = testData.filter(a => a.locale === locale);

        return (data.length > 0) ?
            data :
            testData.filter(a => a.locale === 'en');
    }
};