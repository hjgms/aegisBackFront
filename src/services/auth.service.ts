import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'


@Injectable()
export class AuthService {

    prisma: PrismaClient

    async post(email: string, senha: string) {
        this.prisma = new PrismaClient();

        let user = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        
        if (user != null) {

            if (user.senha == senha) {
                return {"auth": true, "id": user.id};
            }

            return {"auth": false, "response": "Senha Incorreta"};
        }

        return {"auth": false, "response": "Email não cadastrado"};
    }
}
