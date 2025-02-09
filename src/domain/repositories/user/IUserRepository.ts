import { UserProps, UserInput } from "../../models/user/UserProps";
import { BaseRepository } from "../../../types/Global";

interface UsuarioRepository extends BaseRepository<UserProps, UserInput> { }

export default UsuarioRepository;