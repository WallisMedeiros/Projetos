const menu = document.getElementById("menu");

const resultadoTela =
    document.getElementById("resultado");


const btnCalcular =
    document.getElementById("btnCalcular");


const btnVoltar =
    document.getElementById("btnVoltar");


/*
    BOTÃO CALCULAR
*/

btnCalcular.addEventListener("click", function () {

    const dados = coletarDadosFormulario();


    // Verificação básica

    if (!dados.material) {

        alert("Selecione um material.");

        return;
    }


    if (!dados.peso || dados.peso <= 0) {

        alert("Informe o peso da carga.");

        return;
    }


    /*
        Faz a análise estrutural.

        As fórmulas ainda não foram implementadas.
    */

    const resultado =
        analisarEstrutura(dados);


    /*
        Mostra os resultados
    */

    mostrarResultado(
        dados,
        resultado
    );


    /*
        Troca a tela
    */

    menu.classList.add("oculto");

    resultadoTela.classList.remove("oculto");

});


/*
    BOTÃO VOLTAR
*/

btnVoltar.addEventListener("click", function () {

    resultadoTela.classList.add("oculto");

    menu.classList.remove("oculto");

});