import { Request, Response } from "express";
import { CreateUrlUseCase } from "./CreateUrlUseCase";

export class CreateUrlController {
    constructor(
        private createUrlUseCase: CreateUrlUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { token, url } = request.body;

        try {
            await this.createUrlUseCase.execute({
                token: token,
                url: url,
            })

            return response.status(200).json({
                message: 'Url created successfully'
            });
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}