function coletarDadosFormulario() {

    const materialSelecionado =
        document.getElementById("material").value;


    const dados = {

        material: materialSelecionado,

        peso:
            Number(document.getElementById("peso").value),

        fatorSeguranca:
            Number(document.getElementById("fatorSeguranca").value),

        altura:
            Number(document.getElementById("altura").value),

        largura:
            Number(document.getElementById("largura").value),

        profundidade:
            Number(document.getElementById("profundidade").value),

        espessuraAssento:
            Number(
                document.getElementById("espessuraAssento").value
            ),  

        espessuraEncosto:
            Number(
                document.getElementById("espessuraEncosto").value
            ),  

        comprimentoPerna:
            Number(
                document.getElementById("comprimentoPerna").value
            ),

        larguraPerna:
            Number(
                document.getElementById("larguraPerna").value
            ),

        espessuraPerna:
            Number(
                document.getElementById("espessuraPerna").value
            )

    };


    return dados;
}