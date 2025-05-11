import CustomError from './CustomError.cjs';

declare class InternalServerError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { InternalServerError as default };
