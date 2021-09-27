/**
 * Function to construct success response
 * @param {*} statusCode
 * @param {*} message
 * @param {*} data
 */
function successResponse(statusCode, message, data) {
  const successBody = { message: message };
  if (data) {
    successBody["data"] = data;
  }

  return {
    statusCode: statusCode,
    body: successBody,
  };
}

/**
 * Function to construct failure response
 * @param {*} statusCode
 * @param {*} message
 */
function failureResponse(statusCode, message) {
  return {
    statusCode: statusCode,
    body: { message: message },
  };
}

module.exports = {
  successResponse,
  failureResponse,
};
