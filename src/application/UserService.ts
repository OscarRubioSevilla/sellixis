import { User } from '../domain/models/user/User'

import IUserRepository from '../domain/repositories/user/IUserRepository'
export class UserService {
    constructor(private readonly repository: IUserRepository) { }

    create(user: User): Promise<void> {
        return this.repository.create(user)
    }

}