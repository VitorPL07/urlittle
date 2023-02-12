import { Request, Response, Router } from "express";
import path from "path";
import { createUrlController } from "./useCase/CreateUrl";
import { createUserController } from "./useCase/CreateUser";
import { findUrlController } from "./useCase/FindUrl";
import { findUrlArrayController } from "./useCase/FindUrlArray";
import { findUserController } from "./useCase/FindUser";
import { removeUrlController } from "./useCase/RemoveUrl";
import { removeUserController } from "./useCase/RemoveUser";

const router = Router();

router.get('/', (_: Request, response: Response) => {
    return response.sendFile(path.resolve('public', 'views', 'index.html'));
});

router.get('/login', (_: Request, response: Response) => {
    return response.sendFile(path.resolve('public', 'views', 'login.html'));
});

router.get('/register', (_: Request, response: Response) => {
    return response.sendFile(path.resolve('public', 'views', 'register.html'));
});

router.get('/about', (_: Request, response: Response) => {
    return response.sendFile(path.resolve('public', 'views', 'about.html'));
});

router.get('/l/:uri', async (request: Request, response: Response) => {
    await findUrlController.handle(request, response);
});

router.post('/find/user', (request: Request, response: Response) => {
    return findUserController.handle(request, response);
});

router.post('/find/urls/:id', (request: Request, response: Response) => {
    return findUrlArrayController.handle(request, response);
});

router.post('/create/user', (request: Request, response: Response) => {
    return createUserController.handle(request, response);
});

router.post('/create/url', (request: Request, response: Response) => {
    return createUrlController.handle(request, response);
});

router.delete('/user', (request: Request, response: Response) => {
    return removeUserController.handle(request, response);
});

router.delete('/url', (request: Request, response: Response) => {
    return removeUrlController.handle(request, response);
});

export { router };

