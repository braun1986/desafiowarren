// Inicializa todas as variáveis
let ind = 0;
let horaChegada;
let alunosNoHorario = 0;
let alunosAtrasados = 0;
let limitMinimoAlunos = prompt("Insira o mínimo de alunos para ter aula: ")

//Verifica se um número inteiro válido foi inserido como quantidade mínima de alunos para executar o código.
if(limitMinimoAlunos > 0){
    // Temos um laço while para pedir o horário de chegada dos alunos. Como não sabemos quantos alunos são, utilizamos o while.
    // Fiz um while com uma condição verdadeira. O laço é interrompido quando o número 99 é digitado.
    while(true){
        horaChegada = prompt("Informe a hora de chegada do: " + (ind+1) + "° aluno. (99 para Sair.)")
        ind++
        if(horaChegada != 99){
            // Faço o registro dos que chegaram no horário ou atrasados.
            if(horaChegada <= 0){
                alunosNoHorario++
            }else{
                alunosAtrasados++
            }
        }else{
            break;
        }
    }

    // Verifica quantos atrasados e quantos no horário.
    if(alunosNoHorario >= limitMinimoAlunos){
        alert("Aula normal! Tivemos " + alunosAtrasados +
        " aluno(s) atrasado(s) e " + alunosNoHorario +
        " aluno(s) no horário. O mínimo de alunos no horário era de " + limitMinimoAlunos + ". ")
    }else{
        alert("Não haverá aula! Tivemos " + alunosAtrasados +
            " aluno(s) atrasado(s) e " + alunosNoHorario +
            " aluno(s) no horário. O mínimo de alunos no horário era de " + limitMinimoAlunos + ". ")
    }
}else{
    alert("É necessário informar um número maior que 0!")
}



