import { Request, Response } from "express";
import { FindUrlArrayUseCase } from "./FindUrlArrayUseCase";

export class FindUrlArrayController {
    constructor(
        private findUrlArrayUseCase: FindUrlArrayUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const urls = await this.findUrlArrayUseCase.execute(id);

            return response.status(200).json(urls)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}