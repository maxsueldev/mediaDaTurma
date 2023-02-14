// Média de notas de uma turma

/* Escreva um código que simule o calculo da média de cada aluno de uma turma de 6 alunos ao total, a partir de cada aluno 
   com 4 notas por aluno. No final deve ser mostrado a média da turma. */

// Objeto de criação de alunos
class Aluno {
    nome; idade; numeroChamada;
    constructor(nome, idade, numeroChamada) {
        this.nome = nome;
        this.idade = idade;
        this.numeroChamada = numeroChamada;
    }
    get nome() {
        return this.nome;
    }
    get idade() {
        return this.idade;
    }
    get numeroChamada() {
        return this.numeroChamada;
    }
    set nome(nome) {
        this.nome = nome;
    }
    set idade(idade) {
        this.idade = idade;
    }
    set numeroChamada(numeroChamada) {
        this.numeroChamada = numeroChamada;
    }
}

const registrarNotasMediaAluno = function(aluno, nota1, nota2, nota3) {
    let mediasDaTurma = [];
    // Fazer tratamento de erro (Verificar se cada nota vem como number)
    if(typeof nota1 !== "number" || typeof nota2 !== "number" || typeof nota3 !== "number") {
        throw new Error("Todas as notas devem ser do tipo Number");
    }
    aluno.nota1 = nota1;
    aluno.nota2 = nota2;
    aluno.nota3 = nota3;

    aluno.media = (nota1 + nota2 + nota3)/3;
    mediasDaTurma += aluno.media; 
    console.log(mediasDaTurma);
}

const aluno1 = new Aluno("Ana Beatris Castro", 28, 01);
const aluno2 = new Aluno("Ana Maria Souza", 23, 02);
const aluno3 = new Aluno("Antônio Soares Silva", 25, 03);
const aluno4 = new Aluno("Carlos Silva", 29, 04);
const aluno5 = new Aluno("Diego Souza", 23, 05);
const aluno6 = new Aluno("João Miguel", 27, 06);

registrarNotasMediaAluno(aluno1, 9, 7.5, 8);
registrarNotasMediaAluno(aluno2, 6, 4, 8);
registrarNotasMediaAluno(aluno3, 10, 7, 9);
registrarNotasMediaAluno(aluno4, 4, 7, 5.5);
registrarNotasMediaAluno(aluno5, 6, 7, 5)   ;
registrarNotasMediaAluno(aluno6, 7, 6.5, 8);
