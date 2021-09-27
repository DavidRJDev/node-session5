const Spanish = require('./spanish')
const English = require('./english')

const LangFactory = (lang, code) => {
    code = code.toLowerCase();

    switch(lang) {
        case 'en':
            return new English(code);
            break;
        case 'es':
            return new Spanish(code);
            break;
        default:
            return new English(code);
    }
}


module.exports = LangFactory;