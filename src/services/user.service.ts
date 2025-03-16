import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

@Injectable()
export class UserService {

    prisma: PrismaClient

    async get(id: number) {
        this.prisma = new PrismaClient();

        let user = await this.prisma.user.findMany({
            where: {
                id: id
            }
        });
        
        if (user != null) {
            return user;
        }

        return {'response': 'usuario nao encontrado'};
    }

    async post(name: string, email: string, senha: string) {
        this.prisma = new PrismaClient();

        let user = await this.prisma.user.create({
            data: {
                name: name,
                email: email,
                senha: senha,
            }
        });

        return {'response': 'success', 'id': user.id}
    }
}
