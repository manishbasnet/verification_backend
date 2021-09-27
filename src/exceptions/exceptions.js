const responseCodes = require('./errorCodes');

class CustomError extends Error {
    constructor({ message, name, statusCode }) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, CustomError);
    }
}

class BadRequestError extends CustomError {
    constructor(message = 'Bad request') {
        super({
            message,
            name: 'BadRequest',
            statusCode: responseCodes.BAD_REQUEST
        });
    }
}

class NotFoundError extends CustomError {
    constructor(message = 'Not Found') {
        super({
            message,
            name: 'ResourceNotFound',
            statusCode: responseCodes.NOT_FOUND
        });
    }
}
class ResourceConflictError extends CustomError {
    constructor(message = 'Already Exist') {
        super({
            message,
            name: 'ResourceConflict',
            statusCode: responseCodes.RESOURCE_CONFLICT
        });
    }
}

class InternalServerError extends CustomError {
    constructor(message = 'Internal server error') {
        super({
            message,
            name: 'InternalServerError',
            statusCode: responseCodes.INTERNAL_SERVER_ERROR
        });
    }
}

class InvalidParameterError extends CustomError {
    constructor(message = 'Invalid input parameter') {
        super({
            message,
            name: 'InvalidParameterError',
            statusCode: responseCodes.INVALID_PARAMETER
        });
    }
}

class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorised Access to resource') {
        super({
            message,
            name: 'UnauthorizedError',
            statusCode: responseCodes.UNAUTHORIZED
        });
    }
}

module.exports = {
    CustomError,
    BadRequestError,
    NotFoundError,
    InvalidParameterError,
    InternalServerError,
    UnauthorizedError,
    ResourceConflictError
};
