import express from 'express';
export { default as express } from 'express';
import * as http from 'http';
import { Emitter } from 'strict-event-emitter';
import { ServerCoreEvents, ServerCoreOptions } from './types/index.d.cjs';
import 'cors';
import 'express-serve-static-core';
import 'qs';
import 'express-session';

declare class ServerCore extends Emitter<ServerCoreEvents> {
    app: ReturnType<typeof express>;
    server: http.Server;
    options: ServerCoreOptions;
    constructor(options: ServerCoreOptions);
}

export { ServerCore, ServerCore as default };
