import CustomError from './CustomError.cjs';

declare class DuplicatedDataError extends CustomError {
    content?: unknown;
    constructor(message?: string, content?: unknown);
}

export { DuplicatedDataError as default };
