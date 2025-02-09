export interface BaseRepository<T, U> {
    create(usuarioData: U): Promise<void>;
    getAll(): Promise<T[]>;
    update(usuarioData: UserInput): Promise<void>;
    findOne(correo: string): Promise<T | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<T | null>;
}
