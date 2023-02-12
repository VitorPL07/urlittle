import { PostgresUserRepository } from "../../repositories/implementation/PostgresUserRepsitory";
import { RemoveUrlController } from "./RemoveUrlController";
import { RemoveUrlUseCase } from "./RemoveUrlUseCase";

const postgresUserRepository = new PostgresUserRepository();

const removeUrlUseCase = new RemoveUrlUseCase(postgresUserRepository);

const removeUrlController = new RemoveUrlController(removeUrlUseCase);

export { removeUrlController, removeUrlUseCase };
