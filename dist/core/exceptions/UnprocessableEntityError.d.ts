import CustomError from './CustomError.js';

declare class UnprocessableEntityError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { UnprocessableEntityError as default };
