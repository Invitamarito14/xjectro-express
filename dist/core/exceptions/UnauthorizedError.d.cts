import CustomError from './CustomError.cjs';

declare class UnauthorizedError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { UnauthorizedError as default };
