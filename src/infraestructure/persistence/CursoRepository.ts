import { Curso } from "../../domain/entities/Curso";
import { PrismaClient } from "@prisma/client";
import { ICursoRepository } from "../../domain/repositories/ICursoRepository";

export class CursoRepository implements ICursoRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async salvar(curso: Curso): Promise<Curso> {
        const cursoCriado = await this.prisma.curso.create({ data: curso });
        return cursoCriado;
    }

}