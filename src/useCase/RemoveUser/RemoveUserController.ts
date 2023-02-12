import { Request, Response } from "express";
import { RemoveUserUseCase } from "./RemoveUserUseCase";

export class RemoveUserController {
    constructor(
        private removeUserUseCase: RemoveUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        try {
            await this.removeUserUseCase.execute({
                username: username,
                password: password
            });

            return response.status(200).json({
                message: 'User removed successfully'
            })
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}