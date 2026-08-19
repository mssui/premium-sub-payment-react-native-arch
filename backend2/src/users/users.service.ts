import { Injectable } from '@nestjs/common';

import { AuthenticatedUser } from "../authenticated-user.interface";
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly usersRepository: UsersRepository,
    ) { }

    async getCurrentUser(user: AuthenticatedUser) {
        return await this.usersRepository.getUserByUid(user.uid);
    }

    async createNewUser(user: AuthenticatedUser) {
        return await this.usersRepository.createUser(user);
    }
}