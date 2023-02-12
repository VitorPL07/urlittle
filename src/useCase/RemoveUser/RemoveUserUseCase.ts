import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IRemoveUserRequestDTO } from "./RemoveUserDTO";

export class RemoveUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(props: IRemoveUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findUser(props);

        if (!userAlreadyExists) {
            throw new Error('User not found!');
        }

        await this.userRepository.removeUser(userAlreadyExists);
    }
}