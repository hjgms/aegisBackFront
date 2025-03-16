import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post()
    postAuth(@Body() body: {email: string, senha: string}) {
        
        return this.authService.post(
            body.email,
            body.senha
        );
    }
}