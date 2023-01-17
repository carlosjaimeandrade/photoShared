/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

/**
 * Methods to generate logs
 */
const monolog = require('monolog')
, Logger = monolog.Logger
, StreamHandler = monolog.handler.StreamHandler;
    
const log = new Logger('api')

log.pushHandler(new StreamHandler('./src/logger/api.log', Logger.DEBUG))

log.on("log",function(error: any, record: any, handler: any){console.log(arguments)});

export default log