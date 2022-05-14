const containerLista = document.getElementById("lista-produtos");

window.onload = () => {
    async function montaProduto() {
        var response = document.querySelectorAll("a[href='./produto.html?name=${produto.productName}']").then((res) => {
            return res.json();
        })
        response.map((produto) => {
            containerLista.innerHTML += padraoProduto(produto);
        }); 
    };
    montaProduto();
};

function padraoProduto(produto) {
    return `<h2>${produto.productName}</h2>
    <img src="${produto.productImage}">
    <div class="descricao_produto">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    </div>`;
};