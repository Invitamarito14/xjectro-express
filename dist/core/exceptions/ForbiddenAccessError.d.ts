import CustomError from './CustomError.js';

declare class ForbiddenAccessError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { ForbiddenAccessError as default };
