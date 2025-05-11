import { Response } from 'express';
import { ResponseDTO } from '../types/index.d.cjs';
import 'cors';
import 'express-serve-static-core';
import 'qs';
import 'express-session';

declare const response: (res: Response, data: ResponseDTO) => Response;
declare const exceptionResponse: (res: Response, error: unknown) => Response;

export { exceptionResponse, response };
