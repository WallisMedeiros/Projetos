function calcularAssento(dados) {

    // ==========================================
    // 1. DADOS DE ENTRADA
    // ==========================================

    const peso = dados.peso;
    const fatorSeguranca = dados.fatorSeguranca;

    const largura = dados.largura;
    const profundidade = dados.profundidade;
    const espessura = dados.espessuraAssento;

    const material = materiais[dados.material];


    // ==========================================
    // 2. CONVERSÃO DO PESO PARA FORÇA
    // ==========================================

    const gravidade = 9.81;

    const forca = peso * gravidade;


    // ==========================================
    // 3. CARGA DE PROJETO
    // ==========================================

    const cargaProjeto = forca * fatorSeguranca;


    // ==========================================
    // 4. MODELO DA VIGA
    // ==========================================

    // Consideramos a profundidade como
    // comprimento da viga.

    const comprimento = profundidade;


    // ==========================================
    // 5. MOMENTO FLETOR
    // ==========================================

    // Viga simplesmente apoiada
    // com carga concentrada no centro:
    //
    // M = F * L / 4

    const momento = (cargaProjeto * comprimento) / 4;


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
    // 10. VERIFICAÇÃO
    // ==========================================

    let status;

    if (tensao <= tensaoAdmissivel) {

        status = "APROVADO";

    } else {

        status = "REPROVADO";

    }


    // ==========================================
    // 11. DEFORMAÇÃO
    // ==========================================

    // Para uma viga simplesmente apoiada
    // com carga concentrada no centro:
    //
    // δ = F * L³ / (48 * E * I)

    const moduloElasticidade =
        material.moduloElasticidade;


    const deformacao =
        (cargaProjeto * Math.pow(comprimento, 3)) /
        (48 * moduloElasticidade * momentoInercia);


    // ==========================================
    // 12. RETORNO
    // ==========================================

    return {

        forca: forca,

        cargaProjeto: cargaProjeto,

        momento: momento,

        momentoInercia: momentoInercia,

        tensao: tensao,

        tensaoAdmissivel: tensaoAdmissivel,

        deformacao: deformacao,

        status: status

    };
}