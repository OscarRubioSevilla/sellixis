import IUserRepository from "../../domain/repositories/user/IUserRepository";

// Caso de uso
export class UserDelete {
    constructor(private readonly repository: IUserRepository) { }
    // execute
    async run(id: string): Promise<void> {

        await this.repository.delete(id);
    }
}
