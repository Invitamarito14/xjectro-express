import CustomError from './CustomError.cjs';

declare class UnprocessableEntityError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { UnprocessableEntityError as default };
