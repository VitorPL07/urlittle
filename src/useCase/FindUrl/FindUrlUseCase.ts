import { IUsersRepository } from "../../repositories/IUsersRepository";

export class FindUrlUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(uri: string) {
        const url = await this.userRepository.findUrlByUri(uri);

        if (!url) {
            throw new Error('Url not found!');
        }

        return url;
    }
}