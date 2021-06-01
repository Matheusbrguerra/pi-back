import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private userRepository: UsersRepository
    ){}

    async signUp(authCredentialsDto:AuthCredentialsDTO):Promise<void>{
        return this.userRepository.createUser(authCredentialsDto)
    }
}
