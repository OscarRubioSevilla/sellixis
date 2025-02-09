export interface BaseRepository<T, U> {
    create(usuarioData: U): Promise<void>;
    getAll(): Promise<T[]>;
    update(id: string, usuarioData: UserInput): Promise<void>;
    findOne(correo: string): Promise<T | null>;
    delete(id: string): Promise<void>;
}
