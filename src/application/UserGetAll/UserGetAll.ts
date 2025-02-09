import { User } from "../../domain/models/user/User";
import IUserRepository from "../../domain/repositories/user/IUserRepository";

// Caso de uso
export class UserGetAll {
    constructor(private readonly repository: IUserRepository) { }
    // execute
    async run(): Promise<User[]> {
        return this.repository.getAll();
    }

}