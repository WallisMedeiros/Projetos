function calcularPernas(dados) {

    // ==========================================
    // 1. DADOS DE ENTRADA
    // ==========================================

    const peso = dados.peso;
    const fatorSegurancaProjeto = dados.fatorSeguranca;

    const comprimento = dados.comprimentoPerna;
    const largura = dados.larguraPerna;
    const espessura = dados.espessuraPerna;

    const material = materiais[dados.material];


    // ==========================================
    // 2. FORÇA TOTAL
    // ==========================================

    const gravidade = 9.81;

    const forcaTotal = peso * gravidade;


    // ==========================================
    // 3. CARGA DE PROJETO
    // ==========================================

    const cargaProjeto =
        forcaTotal * fatorSegurancaProjeto;


    // ==========================================
    // 4. DISTRIBUIÇÃO DA CARGA
    // ==========================================

    // Consideramos 4 pernas dividindo
    // igualmente a carga.

    const numeroPernas = 4;

    const cargaPorPerna =
        cargaProjeto / numeroPernas;


    // ==========================================
    // 5. ÁREA DA SEÇÃO DA PERNA
    // ==========================================

    // Seção retangular:
    //
    // A = b × h

    const area =
        largura * espessura;


    // ==========================================
    // 6. TENSÃO DE COMPRESSÃO
    // ==========================================

    // σ = F / A

    const tensao =
        cargaPorPerna / area;


    // ==========================================
    // 7. MOMENTO DE INÉRCIA
    // ==========================================

    // Para uma seção retangular:
    //
    // I = b × h³ / 12

    const momentoInercia =
        (largura * Math.pow(espessura, 3)) / 12;


    // ==========================================
    // 8. RAIO DE GIRAÇÃO
    // ==========================================

    // r = √(I / A)

    const raioGiracao =
        Math.sqrt(momentoInercia / area);


    // ==========================================
    // 9. ÍNDICE DE ESBELTEZ
    // ==========================================

    // λ = L / r

    const esbeltez =
        comprimento / raioGiracao;


    // ==========================================
    // 10. CARGA CRÍTICA DE EULER
    // ==========================================

    // Pcr = π² × E × I / (K × L)²
    //
    // Consideramos K = 1
    // para uma condição simplificada
    // de apoio articulado-articulado.

    const K = 1;

    const moduloElasticidade =
        material.moduloElasticidade;

    const cargaCritica =
        (Math.pow(Math.PI, 2) *
            moduloElasticidade *
            momentoInercia) /
        Math.pow(K * comprimento, 2);


    // ==========================================
    // 11. FATOR DE SEGURANÇA CONTRA FLAMBAGEM
    // ==========================================

    const fatorSegurancaFlambagem =
        cargaCritica / cargaPorPerna;


    // ==========================================
    // 12. VERIFICAÇÃO DA COMPRESSÃO
    // ==========================================

    const tensaoAdmissivel =
        material.limiteEscoamento /
        fatorSegurancaProjeto;


    const aprovadoCompressao =
        tensao <= tensaoAdmissivel;


    // ==========================================
    // 13. VERIFICAÇÃO DA FLAMBAGEM
    // ==========================================

    const aprovadoFlambagem =
        fatorSegurancaFlambagem >=
        fatorSegurancaProjeto;


    // ==========================================
    // 14. STATUS FINAL
    // ==========================================

    let status;

    if (
        aprovadoCompressao &&
        aprovadoFlambagem
    ) {

        status = "APROVADO";

    } else {

        status = "REPROVADO";

    }


    // ==========================================
    // 15. RETORNO
    // ==========================================

    return {

        forcaTotal: forcaTotal,

        cargaProjeto: cargaProjeto,

        cargaPorPerna: cargaPorPerna,

        area: area,

        tensao: tensao,

        tensaoAdmissivel: tensaoAdmissivel,

        momentoInercia: momentoInercia,

        raioGiracao: raioGiracao,

        esbeltez: esbeltez,

        flambagem: cargaCritica,

        fatorSeguranca: fatorSegurancaFlambagem,

        status: status

    };
}