import { User } from "../../database/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(props: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findUserByUsername(props.username);

        if (userAlreadyExists) {
            throw new Error('Username already exists!');
        }

        const user = new User(props);

        await this.userRepository.saveUser(user);

        return user;
    }
}