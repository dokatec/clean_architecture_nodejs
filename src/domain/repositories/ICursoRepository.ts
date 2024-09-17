import { Curso } from "../entities/Curso";

export interface ICursoRepository {
    salvar(curso: Curso): Promise<Curso>
}