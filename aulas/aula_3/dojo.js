let alunos = [{
    nome: "José",
    boletim: [
        {curso: "Full Stack", notas: [10, 10, 10], faltas: 0, dataMatricula: 24062020}
    ]
},
{
    nome: "João",
    boletim: [
        {curso: "Back Hendy", notas: [6, 6, 6], faltas: 0, dataMatricula: 24062020}
    ]
}];

const listarAlunos = () => {
    alunos.forEach(aluno => {
        console.log(`------------\nNome: ${aluno.nome}`);
        for(let cursos of aluno.boletim){
            console.log(`Nome do curso: ${cursos.curso}\nNotas: ${cursos.notas}`);
        }
    });
}

const buscarAlunoPorNome = nomeAluno => alunos.filter(aluno => aluno.nome === nomeAluno).pop(); 

const matricularNoCurso = (nomeAluno, ...cursos) => {
    const aluno = buscarAlunoPorNome(nomeAluno);
    cursos.forEach(nomeCurso => {
        aluno.boletim.push({curso: nomeCurso, notas: [], faltas: 0, dataMatricula: new Date()})
    })
    return aluno.boletim;
}

const buscarCurso = (aluno, nomeCurso) => aluno.boletim.filter(matricula => matricula.curso == nomeCurso).pop();

const calcularMedia = (nomeAluno, nomeCurso) => {
    const aluno = buscarAlunoPorNome(nomeAluno);
    const notasCurso = buscarCurso(aluno, nomeCurso).notas;
    const soma = notasCurso.reduce((total, nota) => total + nota);
    const media = soma/notasCurso.length;
    console.log(`Nome: ${nomeAluno}\nCurso: ${nomeCurso}\nMédia: ${media}`);
    return media;
}

const adicionarNota = (nomeAluno, nomeCurso, nota) => {
    const aluno = buscarAlunoPorNome(nomeAluno);
    let cursoSelecionado = buscarCurso(aluno, nomeCurso);
    cursoSelecionado.notas.push(nota);
    console.log("notas adicionadas");
}

const checarAprovado = (nomeAluno, nomeCurso) => {
    const aluno = buscarAlunoPorNome(nomeAluno);
    const cursoSelecionado = buscarCurso(aluno, nomeCurso);
    const media = calcularMedia(nomeAluno, nomeCurso);
    const faltas = cursoSelecionado.faltas;
    return faltas <= 3 && media >= 7 ? "Aprovado" : "Reprovado";
};