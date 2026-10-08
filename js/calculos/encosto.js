function calcularEncosto(dados) {

    // ==========================================
    // 1. DADOS DE ENTRADA
    // ==========================================

    const peso = dados.peso;
    const fatorSeguranca = dados.fatorSeguranca;

    const largura = dados.largura;
    const espessura = dados.espessuraEncosto;

    const material = materiais[dados.material];


    // ==========================================
    // 2. ALTURA DO ENCOSTO
    // ==========================================

    // Por enquanto utilizamos uma estimativa
    // baseada na altura da cadeira.

    const alturaEncosto = dados.altura * 0.5;


    // ==========================================
    // 3. CARGA APLICADA NO ENCOSTO
    // ==========================================

    // Consideramos uma porcentagem do peso
    // aplicada horizontalmente no encosto.

    const gravidade = 9.81;

    const forcaPessoa = peso * gravidade;

    const forcaEncosto = forcaPessoa * 0.30;


    // ==========================================
    // 4. CARGA DE PROJETO
    // ==========================================

    const cargaProjeto =
        forcaEncosto * fatorSeguranca;


    // ==========================================
    // 5. MOMENTO FLETOR
    // ==========================================

    // Modelo simplificado:
    //
    // M = F * L

    const momento =
        cargaProjeto * alturaEncosto;


    // ==========================================
    // 6. MOMENTO DE INÉRCIA
    // ==========================================

    // Seção retangular:
    //
    // I = b * h³ / 12

    const b = largura;
    const h = espessura;

    const momentoInercia =
        (b * Math.pow(h, 3)) / 12;


    // ==========================================
    // 7. DISTÂNCIA ATÉ A FIBRA EXTREMA
    // ==========================================

    const distanciaFibra = h / 2;


    // ==========================================
    // 8. TENSÃO DE FLEXÃO
    // ==========================================

    // σ = M * c / I

    const tensao =
        (momento * distanciaFibra) /
        momentoInercia;


    // ==========================================
    // 9. TENSÃO ADMISSÍVEL
    // ==========================================

    const tensaoAdmissivel =
        material.limiteEscoamento /
        fatorSeguranca;


    // ==========================================
    // 10. DEFORMAÇÃO
    // ==========================================

    // Modelo de uma viga em balanço
    // com carga aplicada na extremidade:
    //
    // δ = F * L³ / (3 * E * I)

    const moduloElasticidade =
        material.moduloElasticidade;


    const deformacao =
        (cargaProjeto *
            Math.pow(alturaEncosto, 3)) /
        (3 *
            moduloElasticidade *
            momentoInercia);


    // ==========================================
    // 11. VERIFICAÇÃO
    // ==========================================

    let status;

    if (tensao <= tensaoAdmissivel) {

        status = "APROVADO";

    } else {

        status = "REPROVADO";

    }


    // ==========================================
    // 12. RETORNO
    // ==========================================

    return {

        forca: forcaEncosto,

        cargaProjeto: cargaProjeto,

        alturaEncosto: alturaEncosto,

        momento: momento,

        momentoInercia: momentoInercia,

        tensao: tensao,

        tensaoAdmissivel: tensaoAdmissivel,

        deformacao: deformacao,

        status: status

    };
}