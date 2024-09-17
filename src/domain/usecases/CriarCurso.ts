import { Curso } from '../entities/Curso';
import { ICursoRepository } from '../repositories/ICursoRepository';

export class CriarCurso {

    constructor(private cursoRepository: ICursoRepository) { }

    async execute(curso: Curso): Promise<Curso> {
        return await this.cursoRepository.salvar(curso);
    }


}