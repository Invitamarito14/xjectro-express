import CustomError from './CustomError.js';

declare class BadRequestError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { BadRequestError as default };
