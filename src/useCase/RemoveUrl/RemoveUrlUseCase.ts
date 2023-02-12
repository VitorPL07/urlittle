import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IRemoveUrlRequestDTO } from "./RemoveUrlDTO";

export class RemoveUrlUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(props: IRemoveUrlRequestDTO) {
        const userAlreadyExists = await this.userRepository.findUserByID(props.user_id);
        const urlAlreadyExists = await this.userRepository.findUrlByUri(props.uri)

        if (!userAlreadyExists) {
            throw new Error('User not found!');
        }

        if (!urlAlreadyExists) {
            throw new Error('Url not found!');
        }

        if (urlAlreadyExists.user_id != userAlreadyExists.id) {
            throw new Error('User not authorized!');
        }

        await this.userRepository.removeUrl(urlAlreadyExists);
    }
}