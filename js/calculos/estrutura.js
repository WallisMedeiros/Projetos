function analisarEstrutura(dados) {

    const assento = calcularAssento(dados);

    const pernas = calcularPernas(dados);

    const travessas = calcularTravessas(dados);

    const encosto = calcularEncosto(dados);


    return {

        assento: assento,

        pernas: pernas,

        travessas: travessas,

        encosto: encosto,

        status: "Análise não implementada"

    };
}