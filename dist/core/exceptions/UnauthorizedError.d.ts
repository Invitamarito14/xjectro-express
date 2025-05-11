import CustomError from './CustomError.js';

declare class UnauthorizedError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { UnauthorizedError as default };
