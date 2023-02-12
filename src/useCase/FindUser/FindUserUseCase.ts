import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IFindUserRequestDTO } from "./FindUserDTO";

export class FindUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(props: IFindUserRequestDTO) {
        const user = await this.userRepository.findUser(props);

        if (!user) {
            throw new Error('User not found!');
        }

        return user;
    }
}