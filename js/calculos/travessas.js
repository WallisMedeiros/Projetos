function calcularTravessas(dados) {

    // ==========================================
    // 1. DADOS DE ENTRADA
    // ==========================================

    const peso = dados.peso;
    const fatorSegurancaProjeto = dados.fatorSeguranca;

    const comprimento = dados.largura;
    const largura = dados.larguraPerna;
    const altura = dados.espessuraPerna;

    const material = materiais[dados.material];


    // ==========================================
    // 2. FORÇA TOTAL
    // ==========================================

    const gravidade = 9.81;

    const forcaTotal =
        peso * gravidade;


    // ==========================================
    // 3. CARGA DE PROJETO
    // ==========================================

    const cargaProjeto =
        forcaTotal * fatorSegurancaProjeto;


    // ==========================================
    // 4. CARGA NA TRAVESSA
    // ==========================================

    // Consideramos que cada travessa
    // recebe metade da carga total.

    const numeroTravessas = 2;

    const cargaPorTravessa =
        cargaProjeto / numeroTravessas;


    // ==========================================
    // 5. MODELO DE VIGA
    // ==========================================

    // Consideramos a travessa como uma
    // viga biapoiada com carga concentrada
    // no centro.

    const momentoMaximo =
        (cargaPorTravessa * comprimento) / 4;


    // ==========================================
    // 6. MOMENTO DE INÉRCIA
    // ==========================================

    // Seção retangular:
    //
    // I = b × h³ / 12

    const momentoInercia =
        (largura * Math.pow(altura, 3)) / 12;


    // ==========================================
    // 7. DISTÂNCIA ATÉ A FIBRA EXTREMA
    // ==========================================

    const c =
        altura / 2;


    // ==========================================
    // 8. TENSÃO DE FLEXÃO
    // ==========================================

    // σ = M × c / I

    const tensaoFlexao =
        (momentoMaximo * c) /
        momentoInercia;


    // ==========================================
    // 9. TENSÃO DE CISALHAMENTO
    // ==========================================

    // Para uma seção retangular:
    //
    // τmáx = 3F / 2A

    const area =
        largura * altura;

    const tensaoCisalhamento =
        (3 * cargaPorTravessa) /
        (2 * area);


    // ==========================================
    // 10. TENSÃO ADMISSÍVEL
    // ==========================================

    const tensaoAdmissivel =
        material.limiteEscoamento /
        fatorSegurancaProjeto;


    // ==========================================
    // 11. VERIFICAÇÃO
    // ==========================================

    const aprovadoFlexao =
        tensaoFlexao <= tensaoAdmissivel;

    const aprovadoCisalhamento =
        tensaoCisalhamento <= tensaoAdmissivel;


    // ==========================================
    // 12. STATUS FINAL
    // ==========================================

    let status;

    if (
        aprovadoFlexao &&
        aprovadoCisalhamento
    ) {

        status = "APROVADO";

    } else {

        status = "REPROVADO";

    }


    // ==========================================
    // 13. RETORNO
    // ==========================================

    return {

        forcaTotal: forcaTotal,

        cargaProjeto: cargaProjeto,

        cargaPorTravessa: cargaPorTravessa,

        momentoMaximo: momentoMaximo,

        momentoInercia: momentoInercia,

        area: area,

        tensaoFlexao: tensaoFlexao,

        tensaoCisalhamento: tensaoCisalhamento,

        tensaoAdmissivel: tensaoAdmissivel,

        status: status

    };
}