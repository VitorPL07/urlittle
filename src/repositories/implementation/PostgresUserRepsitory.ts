import { Url } from "../../database/entities/Url";
import { User } from "../../database/entities/User";
import orm from '../../ormconfig';
import { IUserProps, IUsersRepository } from "../IUsersRepository";

export class PostgresUserRepository implements IUsersRepository {
    async findUser(props: IUserProps): Promise<User | null> {
        const user = await orm.getRepository(User).findOne({
            where: {
                username: props.username,
                password: props.password
            }
        });

        return user;
    }
    async findUserByID(id: string): Promise<User | null> {
        const user = await orm.getRepository(User).findOne({
            where: {
                id: id
            }
        });

        return user;
    }

    async findUrlByUri(uri: string): Promise<Url | null> {
        const url = await orm.getRepository(Url).findOne({
            where: {
                uri: uri
            }
        });

        return url;
    }

    async findUrlByUserID(id: string): Promise<Url[] | null> {
        const urls = await orm.getRepository(Url).find({
            where: {
                user_id: id
            }
        });

        return urls;
    }

    async saveUser(props: User): Promise<void> {
        await orm.getRepository(User).save(props);
    }

    async saveUrl(props: Url): Promise<void> {
        await orm.getRepository(Url).save(props);
    }

    async removeUser(props: User): Promise<void> {
        await orm.getRepository(User).remove(props);
    }

    async removeUrl(props: Url): Promise<void> {
        await orm.getRepository(Url).remove(props);
    }
}