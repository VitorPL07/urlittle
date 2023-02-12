import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        try {
            const user = await this.createUserUseCase.execute({
                username: username,
                password: password
            })

            return response.status(200).json(user);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}