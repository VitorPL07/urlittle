import { Request, Response } from "express";
import { RemoveUrlUseCase } from "./RemoveUrlUseCase";

export class RemoveUrlController {
    constructor(
        private removeUrlUseCase: RemoveUrlUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, uri } = request.body;

        try {
            await this.removeUrlUseCase.execute({
                user_id: id,
                uri: uri
            });

            return response.status(200).json({
                message: 'Url removed successfully'
            })
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}