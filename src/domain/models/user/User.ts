import { UserRole, UserProps } from "./UserProps";

export class User {
    public id?: number;
    public rol: UserRole;
    public nombre: string;
    public apellido_m: string;
    public apellido_p: string;
    public correo: string;
    public contrasena: string;
    public fecha_creacion?: Date;
    public fecha_modificacion?: Date;
  
    constructor(props: UserProps) {
      this.id = props.id;
      this.rol = props.rol;
      this.nombre = props.nombre;
      this.apellido_m = props.apellido_m;
      this.apellido_p = props.apellido_p;
      this.correo = props.correo;
      this.contrasena = props.contrasena;
      this.fecha_creacion = props.fecha_creacion;
      this.fecha_modificacion = props.fecha_modificacion;
    }
  }
  