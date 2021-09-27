"use strict";

const Validator = require("jsonschema").Validator;
const v = new Validator();
const { BadRequestError } = require("../exceptions/exceptions");
const { isValidCode } = require("../utils/index");

/* Custom validation added for verification code. */
Validator.prototype.customFormats.verifyCode = function (input) {
  return isValidCode(input);
};

/**
 * Validates the payload for verification code.
 *
 * @param {*} payload
 */
const validateVerifyCode = async (payload) => {
  const schema = {
    required: ["code"],
    properties: {
      code: {
        type: "number",
        format: "verifyCode",
      },
    },
  };

  return await validation(payload, schema);
};

/**
 * Validates the payload with pre-defined schema
 *
 * @param {*} payload
 * @param {*} schema
 */
const validation = async (payload, schema) => {
  const result = v.validate(payload, schema);
  if (!result.valid) {
    console.error("Invalid Request Arguments : " + result.toString());
    throw new BadRequestError("Invalid Request Arguments");
  }
  return result.valid;
};

module.exports = {
  validation,
  validateVerifyCode,
};
