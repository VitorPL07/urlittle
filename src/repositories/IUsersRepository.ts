import { Url } from "../database/entities/Url";
import { User } from "../database/entities/User";

export interface IUserProps {
    username: string;
    password: string;
}

export interface IUsersRepository {
    findUser(props: IUserProps): Promise<User | null>
    findUserByID(id: string): Promise<User | null>
    findUrlByUri(uri: string): Promise<Url | null>;
    findUrlByUserID(id: string): Promise<Url[] | null>
    saveUser(props: User): Promise<void>;
    saveUrl(props: Url): Promise<void>;
    removeUser(props: User): Promise<void>;
    removeUrl(props: Url): Promise<void>;
}