import * as express from "express";


declare namespace queryParser {
    interface Options {
        parseBoolean?: boolean,
        parseNumber?: boolean,
    }
}

declare function queryParser(options?: queryParser.Options): (req: express.Request,
                                                        res: express.Response,
                                                        next: express.NextFunction,) => void;


export = queryParser





