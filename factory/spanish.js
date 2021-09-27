var countryLib = require('i18n-iso-countries');

class Spanish {
    constructor(countryCode) {
        this.lang = "es";
        this.code = countryCode;
        this.country = countryLib.getName(this.code, this.lang, {select: "official"});
    }

    getName() {
        return this;
    }
}

module.exports = Spanish;