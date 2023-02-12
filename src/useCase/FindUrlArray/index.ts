import { PostgresUserRepository } from "../../repositories/implementation/PostgresUserRepsitory";
import { FindUrlArrayController } from "./FindUrlArrayController";
import { FindUrlArrayUseCase } from "./FindUrlArrayUseCase";

const postgresUserRepository = new PostgresUserRepository()

const findUrlArrayUseCase = new FindUrlArrayUseCase(postgresUserRepository);

const findUrlArrayController = new FindUrlArrayController(findUrlArrayUseCase);

export { findUrlArrayController, findUrlArrayUseCase };
