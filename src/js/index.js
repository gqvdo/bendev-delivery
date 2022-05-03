window.onload = () => {
    console.log("Ola mentorados baum ?");
    const containerLista = document.getElementById("lista-produtos")

    // essa função espera
    async function pegaProdutos() {
        const response = await fetch("https://bendevoficial.com/api/mentoria/produtos").then((res) => {
            return res.json();
        });
        console.log(response)
        response.map((produto) => {
            containerLista.innerHTML += `<div class="produto_item">
                                            <img src="${produto.productImage}">
                                            <div class="produto_item_text">
                                                <h2>${produto.productName}</h2>
                                            </div>
                                        </div>`
        });
    }

    pegaProdutos()
};