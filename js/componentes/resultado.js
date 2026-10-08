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
            <strong>Força:</strong>
            ${resultado.assento.forca.toFixed(2)} N
        </p>

        <p>
            <strong>Carga de projeto:</strong>
            ${resultado.assento.cargaProjeto.toFixed(2)} N
        </p>

        <p>
            <strong>Momento fletor:</strong>
            ${resultado.assento.momento.toFixed(2)} N·mm
        </p>

        <p>
            <strong>Momento de inércia:</strong>
            ${resultado.assento.momentoInercia.toFixed(2)} mm⁴
        </p>

        <p>
            <strong>Tensão de flexão:</strong>
            ${resultado.assento.tensao.toFixed(2)} MPa
        </p>

        <p>
            <strong>Tensão admissível:</strong>
            ${resultado.assento.tensaoAdmissivel.toFixed(2)} MPa
        </p>

        <p>
            <strong>Deformação:</strong>
            ${resultado.assento.deformacao.toFixed(2)} mm
        </p>

        <p>
            <strong>Status:</strong>
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
            <strong>Carga total:</strong>
            ${resultado.pernas.forcaTotal.toFixed(2)} N
        </p>

        <p>
            <strong>Carga por perna:</strong>
            ${resultado.pernas.cargaPorPerna.toFixed(2)} N
        </p>

        <p>
            <strong>Área da seção:</strong>
            ${resultado.pernas.area.toFixed(2)} mm²
        </p>

        <p>
            <strong>Tensão de compressão:</strong>
            ${resultado.pernas.tensao.toFixed(2)} MPa
        </p>

        <p>
            <strong>Tensão admissível:</strong>
            ${resultado.pernas.tensaoAdmissivel.toFixed(2)} MPa
        </p>

        <p>
            <strong>Momento de inércia:</strong>
            ${resultado.pernas.momentoInercia.toFixed(2)} mm⁴
        </p>

        <p>
            <strong>Índice de esbeltez:</strong>
            ${resultado.pernas.esbeltez.toFixed(2)}
        </p>

        <p>
            <strong>Carga crítica de flambagem:</strong>
            ${resultado.pernas.flambagem.toFixed(2)} N
        </p>

        <p>
            <strong>Fator de segurança contra flambagem:</strong>
            ${resultado.pernas.fatorSeguranca.toFixed(2)}
        </p>

        <p>
            <strong>Status:</strong>
            ${resultado.pernas.status}
        </p>

    </div>

`;

    


    document.getElementById(
    "resultadoEstrutura"
    ).innerHTML = `

        <div class="resultado-card">

            <h3>Encosto</h3>

            <p>
                <strong>Força aplicada:</strong>
                ${resultado.encosto.forca.toFixed(2)} N
            </p>

            <p>
                <strong>Carga de projeto:</strong>
                ${resultado.encosto.cargaProjeto.toFixed(2)} N
            </p>

            <p>
                <strong>Altura considerada:</strong>
                ${resultado.encosto.alturaEncosto.toFixed(2)} mm
            </p>

            <p>
                <strong>Momento fletor:</strong>
                ${resultado.encosto.momento.toFixed(2)} N·mm
            </p>

            <p>
                <strong>Momento de inércia:</strong>
                ${resultado.encosto.momentoInercia.toFixed(2)} mm⁴
            </p>

            <p>
                <strong>Tensão de flexão:</strong>
                ${resultado.encosto.tensao.toFixed(2)} MPa
            </p>

            <p>
                <strong>Tensão admissível:</strong>
                ${resultado.encosto.tensaoAdmissivel.toFixed(2)} MPa
            </p>

            <p>
                <strong>Deformação:</strong>
                ${resultado.encosto.deformacao.toFixed(2)} mm
            </p>

            <p>
                <strong>Status:</strong>
                ${resultado.encosto.status}
            </p>

        </div>

    `;

    document.getElementById(
        "resultadoTravessas"
    ).innerHTML = `

        <div class="resultado-card">

            <h3>Travessas</h3>

            <p>
                <strong>Carga total:</strong>
                ${resultado.travessas.forcaTotal.toFixed(2)} N
            </p>

            <p>
                <strong>Carga por travessa:</strong>
                ${resultado.travessas.cargaPorTravessa.toFixed(2)} N
            </p>

            <p>
                <strong>Momento máximo:</strong>
                ${resultado.travessas.momentoMaximo.toFixed(2)} N·mm
            </p>

            <p>
                <strong>Momento de inércia:</strong>
                ${resultado.travessas.momentoInercia.toFixed(2)} mm⁴
            </p>

            <p>
                <strong>Tensão de flexão:</strong>
                ${resultado.travessas.tensaoFlexao.toFixed(2)} MPa
            </p>

            <p>
                <strong>Tensão de cisalhamento:</strong>
                ${resultado.travessas.tensaoCisalhamento.toFixed(2)} MPa
            </p>

            <p>
                <strong>Tensão admissível:</strong>
                ${resultado.travessas.tensaoAdmissivel.toFixed(2)} MPa
            </p>

            <p>
                <strong>Status:</strong>
                ${resultado.travessas.status}
            </p>

        </div>

    `;
}