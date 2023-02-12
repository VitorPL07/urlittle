import { Url } from "../../database/entities/Url";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUrlRequestDTO } from "./CreateUrlDTO";

export class CreateUrlUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(props: ICreateUrlRequestDTO) {
        const user = await this.userRepository.findUserByID(props.token);

        if (!user) {
            throw new Error('User not found!');
        }
        const url = new Url({ main: props.url, user: user })

        await this.userRepository.saveUrl(url);
    }
}