export class Curso {

    id: string;
    nome: string;
    descricao: string;
    cargaHoraria: number;
    categoria: string;
    professor: string;
    dataInicio: Date;
    status: string;
    modulos: Array<any>

    constructor(
        id: string,
        nome: string,
        descricao: string,
        cargaHoraria: number,
        categoria: string,
        professor: string,
        dataInicio: Date,
        status: string,
        modulos: Array<any>
    ) {
        this.id = id;
        this.nome = nome,
            this.descricao = descricao;
        this.cargaHoraria = cargaHoraria;
        this.categoria = categoria;
        this.professor = professor;
        this.dataInicio = dataInicio;
        this.status = status;
        this.modulos = modulos;
    }

}