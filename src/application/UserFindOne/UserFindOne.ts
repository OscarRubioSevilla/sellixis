import { User } from "../../domain/models/user/User";
import { UserNotFound } from "../../domain/models/user/UserNotFound";
import IUserRepository from "../../domain/repositories/user/IUserRepository";

// Caso de uso
export class UserFindOne {
    constructor(private readonly repository: IUserRepository) { }
    // execute
    async run(id: string): Promise<User | null> {
        const user = this.repository.findOne(id);

        if (!user) throw new UserNotFound("User not found"); // retornar 404 

        return user;

    }

}