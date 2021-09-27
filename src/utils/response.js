/**
 * Function to construct success response
 * @param {*} statusCode
 * @param {*} message
 * @param {*} data
 */
function successResponse(statusCode, message, data) {
    const successBody = { message: message };
    if (data) {
        successBody['data'] = data;
    }

    return {
        statusCode: statusCode,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(successBody)
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
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: message })
    };
}

module.exports = {
    successResponse,
    failureResponse
};
