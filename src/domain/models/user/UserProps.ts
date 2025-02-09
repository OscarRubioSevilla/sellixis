export enum UserRole {
    ADMIN = "Administrador",
    SELLER = "Vendedor",
}

export interface UserProps {
    id?: number;
    rol: UserRole;
    nombre: string;
    apellido_m: string;
    apellido_p: string;
    correo: string;
    contrasena: string;
    fecha_creacion?: Date;
    fecha_modificacion?: Date;
}

// Para la entrada de usuario, puedes definir un tipo específico
export type UserInput = Omit<UserProps, 'id'>;