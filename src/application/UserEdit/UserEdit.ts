import IUserRepository from "../../domain/repositories/user/IUserRepository";

// Caso de uso
export class UserEdit {
    constructor(private readonly repository: IUserRepository) { }
    // execute
    async run(id: string, nombre: string, apellido_m: string, apellido_p: string): Promise<void> {

        // Obtener el usuario existente
        const existingUser = await this.repository.findById(id);

        if (!existingUser) {
            throw new Error("Usuario no encontrado");
        }

        // Actualizar solo los campos proporcionados
        existingUser.nombre = nombre ?? existingUser.nombre;
        existingUser.apellido_m = apellido_m ?? existingUser.apellido_m;
        existingUser.apellido_p = apellido_p ?? existingUser.apellido_p;
        existingUser.fecha_modificacion = new Date(); // Actualizar fecha de modificación

        // Guardar cambios en el repositorio
        await this.repository.update(existingUser);
    }

}