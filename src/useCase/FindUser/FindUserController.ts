import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
    constructor(
        private findUserUseCase: FindUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        try {
            const user = await this.findUserUseCase.execute({
                username: username,
                password: password
            });
            return response.status(200).json(user);
        } catch (error: any) {
            return response.status(404).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}