import CustomError from './CustomError.js';

declare class InternalServerError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { InternalServerError as default };
