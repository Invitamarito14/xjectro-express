import CustomError from './CustomError.cjs';

declare class BadRequestError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { BadRequestError as default };
