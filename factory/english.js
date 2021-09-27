var countryLib = require('i18n-iso-countries');

class English {
    constructor(countryCode) {
        this.lang = "en";
        this.code = countryCode;
        this.country = countryLib.getName(this.code, this.lang, {select: "official"});
    }

    getName() {
        return this;
    }
}

module.exports = English;