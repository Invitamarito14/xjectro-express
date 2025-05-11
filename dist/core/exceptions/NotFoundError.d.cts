import CustomError from './CustomError.cjs';

declare class NotFoundError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { NotFoundError as default };
