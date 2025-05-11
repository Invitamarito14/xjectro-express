import { Application, Request, Response, NextFunction } from 'express';
export { Application, NextFunction, Request, Response, Router } from 'express';
import { CorsOptions } from 'cors';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { SessionOptions } from 'express-session';

type Class<T = any> = new (...args: any[]) => T;

declare global {
  namespace Express {
    interface Request {
      isLoggedIn: boolean;
    }
  }
}


interface CustomRequest extends Request {
  isLoggedIn: boolean;
}

interface CustomResponse extends Response {
  isLoggedIn: boolean;
}

type RequestHandler<
  Params = ParamsDictionary,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = ParsedQs,
  Locals extends Record<string, unknown> = Record<string, unknown>,
> = (
  req: Request<Params, ResBody, ReqBody, ReqQuery, Locals>,
  res: Response<ResBody>,
  next: NextFunction,
) => void | Promise<void>;

type RequestMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE';

type ServerCoreEvents = {
  ping: [timestamp: number];
  listen: [url: string];
};

interface ServerCoreOptions {
  port: number | string;
  cors: CorsOptions;
  json?: { limit: string };
  urlencoded?: { limit: string };
  session?: SessionOptions;
}

interface RoutesHandlerOptionsRoute {
  handlerClass: Class;
  prefix: string;
}

interface RoutesHandlerOptions {
  app: Application;
  routes: RoutesHandlerOptionsRoute[];
}

type ResponseDTO = {
  code?: number;
  success?: boolean;
  message?: string;
  data?: unknown;
};

export type { CustomRequest, CustomResponse, RequestHandler, RequestMethod, ResponseDTO, RoutesHandlerOptions, RoutesHandlerOptionsRoute, ServerCoreEvents, ServerCoreOptions };
