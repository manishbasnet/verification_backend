const dbQueries = require("../db/dbQueries");
const {
  InternalServerError,
} = require("../exceptions/exceptions");

/**
 * Function to verify code.
 *
 * @param {*} db
 * @param {*} data
 * @returns {object}
 */
const verify = async (db, { code }) => {
  try {
    
  } catch (error) {
    console.error("Error: " + error);
    throw new InternalServerError("Something went wrong!");
  }
};

module.exports = {
  verify,
};
