import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private userRepository: UsersRepository,
        private jwtService: JwtService
    ) { }

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.createUser(authCredentialsDto)
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ acessToken: string }> {
        const { username, password } = authCredentialsDto

        const user = await this.userRepository.findOne({ username })

        if (user && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayload = { username }
            const acessToken: string = await this.jwtService.sign(payload)

            return { acessToken }
        } else {
            throw new UnauthorizedException('Credenciais incorretas, favor verificar')
        }
    }
}
