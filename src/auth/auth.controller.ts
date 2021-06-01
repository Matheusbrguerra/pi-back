import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ){}
    @Post()
    signUp(@Body() authCredentialsDto:AuthCredentialsDTO): Promise<void>{
        return this.authService.signUp(authCredentialsDto)
    }
}
