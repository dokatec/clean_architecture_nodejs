import { CriarCurso } from "../usecases/CriarCurso";
import { ICursoRepository } from "../repositories/ICursoRepository";
import { Curso } from "../entities/Curso";

export class CursoService {

    private meusCurso: CriarCurso;

    constructor(cursoRepository: ICursoRepository) {
        this.meusCurso = new CriarCurso(cursoRepository);
    }

    async criarCurso(curso: Curso): Promise<Curso> {
        return await this.meusCurso.execute(curso);
    }




}