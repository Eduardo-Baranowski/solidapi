import { MailtrapMailProvider } from "../../providers/implementatios/MailtrapProvider";
import { PostgresUsersRepository } from "../../repositories/implementatios/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export {createUserUseCase, createUserController}