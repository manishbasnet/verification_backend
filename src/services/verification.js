const dbQueries = require("../db/dbQueries");
const validation = require('../validations');

/**
 * Function to verify code.
 *
 * @param {*} db
 * @param {*} body
 * @returns {object}
 */
const verify = async (db, body) => {
    // Do any DB related stuffs if needed.

    // Validates the request body.
    const isValid = await validation.validateVerifyCode(body);

    return isValid;
};


module.exports = {
  verify,
};
