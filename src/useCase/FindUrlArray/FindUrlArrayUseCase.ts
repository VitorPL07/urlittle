
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class FindUrlArrayUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(id: string) {
        const urls = await this.userRepository.findUrlByUserID(id);

        if (!urls) {
            throw new Error('Urls not found!');
        }

        return urls;
    }
}