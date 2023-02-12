import { Request, Response } from "express";
import path from "path";
import { FindUrlUseCase } from "./FindUrlUseCase";

export class FindUrlController {
    constructor(
        private findUrlUseCase: FindUrlUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<void> {
        const { uri } = request.params

        try {
            const url = await this.findUrlUseCase.execute(uri);

            response.redirect(url.main);
        } catch (error) {
            response.sendFile(path.resolve('public', 'views', 'error.html'));
        }
    }
}