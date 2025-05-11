import { ZodType } from 'zod';
import { Request, Response, NextFunction } from 'express';

declare const validate: (schema: ZodType, type?: "params" | "body" | "query") => (req: Request, res: Response, next: NextFunction) => void;

export { validate };
