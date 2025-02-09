import { User } from "../../domain/models/user/User";
import IUserRepository from "../../domain/repositories/user/IUserRepository";

// Caso de uso
export class UserEdit {
    constructor(private readonly repository: IUserRepository) { }
    // execute
    async run(nombre: string, apellido_m: string, apellido_p: string): Promise<void> {

        // const user = new User({
        //     nombre, apellido_m, apellido_p
        // });

        // return this.repository.create(user)

    }

}