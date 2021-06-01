import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials';

@Controller('auth')
@UsePipes(ValidationPipe)
export class AuthController {
    constructor(
        private authService:AuthService
    ){}

    @Post('/signup')
    signUp(@Body() authCredentialsDto:AuthCredentialsDto):Promise<void>{
        return this.authService.signUp(authCredentialsDto)
    }

    @Post('/signin')
    signIn(@Body() authCredentialsDto:AuthCredentialsDto) : Promise<{ acessToken: string }>{
        return this.authService.signIn(authCredentialsDto)
    }

}
