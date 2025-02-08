import { SITE_NAME } from './../constants/system';

import express from "express";
import cors from "cors";

export const createServer = () => {

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get("/", (_, res) => {
        res.send(SITE_NAME);
    });

    return app
}
