function mostrarResultado(dados, resultado) {

    const material =
        materiais[dados.material];


    document.getElementById(
        "informacoesMaterial"
    ).innerHTML = `

        <div class="resultado-card">

            <h3>Material</h3>

            <p>
                <strong>Material:</strong>
                ${material.nome}
            </p>

            <p>
                <strong>Módulo de elasticidade:</strong>
                ${material.moduloElasticidade} MPa
            </p>

            <p>
                <strong>Limite de escoamento:</strong>
                ${material.limiteEscoamento} MPa
            </p>

        </div>

    `;


    document.getElementById(
        "resultadoAssento"
    ).innerHTML = `

        <div class="resultado-card">

            <h3>Assento</h3>

            <p>
                Status:
                ${resultado.assento.status}
            </p>

        </div>

    `;


    document.getElementById(
        "resultadoPernas"
    ).innerHTML = `

        <div class="resultado-card">

            <h3>Pernas</h3>

            <p>
                Status:
                ${resultado.pernas.status}
            </p>

        </div>

    `;


    document.getElementById(
        "resultadoEstrutura"
    ).innerHTML = `

        <div class="resultado-card">

            <h3>Estrutura</h3>

            <p>
                ${resultado.status}
            </p>

        </div>

    `;
}