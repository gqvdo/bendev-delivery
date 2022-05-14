let produtos = [];
const containerLista = document.getElementById("lista-produtos");

window.onload = () => {
    // essa função espera
    async function pegaProdutos() {
        const response = await fetch("https://bendevoficial.com/api/mentoria/produtos").then((res) => {
            return res.json();
        });
        response.map((produto) => {
            containerLista.innerHTML += padraoDiv(produto);
        });
        produtos = response;
    }
    pegaProdutos();
}

function filtrar() {
    let valor = document.getElementById("busca").value;
    const filtrados = [];
    produtos.map((produto, index) => {
        if (produto.productName.includes(valor)) {
            filtrados.push(produto);
        }
    })

    containerLista.innerHTML = "";
    filtrados.map((produto) => {
        containerLista.innerHTML += padraoDiv(produto);
    });
};

function padraoDiv(produto) {
    return `<a class="produto_item" href="./produto.html?name=${produto.productName}">
    <img src="${produto.productImage}">
    <div class="produto_item_text">
        <h2>${produto.productName}</h2>
    </div>
</a>`
}

// function pageProduto() {
//     produtos.map((produto) => {
//         containerLista.innerHTML += `<a class="produto_item" href="./produto.html?name=${produto.productName}">
//                                         <img src="${produto.productImage}">
//                                         <div class="produto_item_text">
//                                             <h2>${produto.productName}</h2>
//                                         </div>
//                                     </a>`
//     });
// }