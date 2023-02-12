import { PostgresUserRepository } from "../../repositories/implementation/PostgresUserRepsitory";
import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from "./FindUserUseCase";

const postgresUserRepository = new PostgresUserRepository();

const findUserUseCase = new FindUserUseCase(postgresUserRepository);

const findUserController = new FindUserController(findUserUseCase);

export { findUserController, findUserUseCase };
