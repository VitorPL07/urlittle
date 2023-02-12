import { PostgresUserRepository } from "../../repositories/implementation/PostgresUserRepsitory";
import { RemoveUserController } from "./RemoveUserController";
import { RemoveUserUseCase } from "./RemoveUserUseCase";

const postgresUserRepository = new PostgresUserRepository();

const removeUserUseCase = new RemoveUserUseCase(postgresUserRepository);

const removeUserController = new RemoveUserController(removeUserUseCase);

export { removeUserController, removeUserUseCase };

