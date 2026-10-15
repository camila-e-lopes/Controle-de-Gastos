let saldo = 500;
let total = 0;

// FUNÇÃO PARA ADICIONAR NOVO GASTO
function adicionarGasto(){

    // PEGAR OS VALORES DOS CAMPOS
    let descricao = document.getElementById("descricao").value;
    let valor = Number(document.getElementById("valor").value);

    if(descricao == "" || valor <= 0){
        alert("Preencha a descrição e o valor!");
        return;
    }

    // ATUALIZA OS VALORES
    total = total + valor;
    saldo = saldo - valor;

    // CRIA O GASTO
    let gasto = document.createElement("div");
    gasto.className = "gasto";

    // DESCRIÇÃO
    let nome = document.createElement("span");
    nome.textContent = descricao;

    // VALOR
    let preco = document.createElement("span");
    preco.textContent = "R$ " + valor.toFixed(2);

    // BOTÃO EXCLUIR
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.className = "botao-excluir";

    // FUNÇÃO PARA EXCLUIR O GASTO
    botaoExcluir.onclick = function(){

        total = total - valor;
        saldo = saldo + valor;

        document.getElementById("total").textContent =
            "R$ " + total.toFixed(2);

        document.getElementById("saldo").textContent =
            "R$ " + saldo.toFixed(2);

        gasto.remove();
    };

    // ADICIONA OS ELEMENTOS AO GASTO
    gasto.appendChild(nome);
    gasto.appendChild(preco);
    gasto.appendChild(botaoExcluir);

    // ADICIONA O GASTO NA LISTA
    document.getElementById("listaGastos").appendChild(gasto);

    // ATUALIZA O TOTAL
    document.getElementById("total").textContent =
        "R$ " + total.toFixed(2);

    // ATUALIZA O SALDO
    document.getElementById("saldo").textContent =
        "R$ " + saldo.toFixed(2);

    // LIMPA OS CAMPOS
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
}