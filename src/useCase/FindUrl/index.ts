import { PostgresUserRepository } from "../../repositories/implementation/PostgresUserRepsitory";
import { FindUrlController } from "./FindUrlController";
import { FindUrlUseCase } from "./FindUrlUseCase";

const postgresUserRepository = new PostgresUserRepository()

const findUrlUseCase = new FindUrlUseCase(postgresUserRepository);

const findUrlController = new FindUrlController(findUrlUseCase);

export { findUrlController, findUrlUseCase };
