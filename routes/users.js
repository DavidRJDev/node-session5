var express = require('express');
var router = express.Router();

var LangFactory = require('../factory/language')

/**
 * @swagger
 *    components:
 *      schemas:
 *        Language:
 *          type: object
 *          required:
 *            - lang
 *            - code
 *          properties:
 *            lang:
 *              type: string
 *            code:
 *              type: string
 *            country:
 *              type: string
 *          example:
 *            lang: en
 *            code: it
 *            name: Italy
 */

/**
 * @swagger
 * tags:
 *    name: Country
 *    description: return country names
 */

/**
 * @swagger
 * /users/getName/{code}:
 *   get:
 *      tags: [Country]
 *      summary: Retrieve a message with the country name
 *      description: Returns a country name search by country code
 *      parameters:
 *        - in: path
 *          name: code
 *          schema:
 *            type: string
 *          required: true
 *          description: Country code.
 *          example: en
 *        - in: header
 *          name: lang
 *          schema:
 *            type: string
 *          required: false
 *          description: language to use
 *          example: us
 *      responses:
 *        200:
 *          description: Message with the country code and country name.
 *          contens:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Language'
 */
router.get('/getName/:code', function(req, res, next) {
  let lang = req.get('lang');
  let code = req.params.code;

  if(lang == undefined) {
    lang = ""
  }

  const country = LangFactory(lang, code);
  // res.send(country);
  res.status(200).json({
    lang: country.lang,
    code: country.code,
    country: country.country
  });
});

module.exports = router;
