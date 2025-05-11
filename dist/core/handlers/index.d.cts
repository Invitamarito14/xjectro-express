import { Request, Response } from 'express';
import { ResponseDTO, RoutesHandlerOptions } from '../types/index.d.cjs';
import 'cors';
import 'express-serve-static-core';
import 'qs';
import 'express-session';

declare const wrapHandler: <T extends ResponseDTO>(fn: (req: Request, res: Response) => T | Promise<T>) => (req: Request, res: Response) => Promise<void>;
declare class RoutesHandler {
    options: RoutesHandlerOptions;
    constructor(options: RoutesHandlerOptions);
}

export { RoutesHandler, wrapHandler };
