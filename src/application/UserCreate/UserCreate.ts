import { User } from "../../domain/models/user/User";
import { UserRole } from "../../domain/models/user/UserProps";
import IUserRepository from "../../domain/repositories/user/IUserRepository";

// Caso de uso
export class UserCreate {
    constructor(private readonly repository: IUserRepository) { }
    // execute
    async run(nombre: string, apellido_m: string, apellido_p: string, rol: UserRole, correo: string, contrasena: string): Promise<void> {

        const user = new User({
            nombre, apellido_m, apellido_p, correo, contrasena, rol
        });

        return this.repository.create(user)

    }

}