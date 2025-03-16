import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Get()
    getUser(@Body() body: {id: number}) {
        
        return this.userService.get(
            body.id
        );
    }

    @Post()
    postUser(@Body() body: {nome:string, email: string, senha: string}) {
        
        return this.userService.post(
            body.nome,
            body.email,
            body.senha
        );
    }

    // @Put()

    // @Delete()

}