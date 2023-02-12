import cors from 'cors';
import express from 'express';
import { router } from './router';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.use(express.static("public", {
    setHeaders: function (res, path, stat) {
        if (path.endsWith(".css")) {
            res.set("Content-Type", "text/css");
        }
        if (path.endsWith(".js")) {
            res.set("Content-Type", "application/javascript");
        }
    },
}));

export { app };

