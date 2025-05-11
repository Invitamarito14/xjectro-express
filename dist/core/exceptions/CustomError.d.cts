declare class CustomError extends Error {
    code: number;
    data?: unknown;
    constructor(code: number, message: string, data?: unknown);
}

export { CustomError as default };
