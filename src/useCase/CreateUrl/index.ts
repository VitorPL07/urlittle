import { PostgresUserRepository } from "../../repositories/implementation/PostgresUserRepsitory";
import { CreateUrlController } from "./CreateUrlController";
import { CreateUrlUseCase } from "./CreateUrlUseCase";

const postgresUserRepository = new PostgresUserRepository()

const createUrlUseCase = new CreateUrlUseCase(postgresUserRepository);

const createUrlController = new CreateUrlController(createUrlUseCase);

export { createUrlController, createUrlUseCase };

