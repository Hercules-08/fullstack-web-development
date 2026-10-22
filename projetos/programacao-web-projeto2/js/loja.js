"use strict";

// Selecionar os elementos HTML da loja
const productList = document.querySelector("#product-list");
const categoryFilter = document.querySelector("#category-filter");
const productSelect = document.querySelector("#product");
const calcForm = document.querySelector("#calc-form");
const quantityInput = document.querySelector("#quantity");
const totalValue = document.querySelector("#total-value");
const loadingMessage = document.querySelector("#loading-message");

// Elementos da lightbox
const lightbox = document.querySelector("#lightbox");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxDescription = document.querySelector("#lightbox-description");
const lightboxPrice = document.querySelector("#lightbox-price");
const closeLightbox = document.querySelector("#close-lightbox");

// Guardar os dados carregados do JSON
let catalogo = {
    categories: [],
    products: []
};

// Formatar os preços em euros
const formatarPreco = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR" 
});

// 1. Carregar o catálogo através de AJAX com fetch()
async function carregarCatalogo() {
    try {
        const response = await fetch("catalog.json");

        if (!response.ok) {
            throw new Error("Não foi possível carregar o catálogo.");
        }

        catalogo = await response.json();

// Mostrar categorias, produtos e opções do formulário
        carregarCategorias();
        carregarProdutosNoSelect();
        mostrarProdutos(catalogo.products);

        loadingMessage.textContent = catalogo.products.length > 0 ? "": "Ainda não existem produtos no catálogo.";

    } catch (erro) {
        console.error("Erro ao carregar o catálogo:", erro);
        loadingMessage.textContent = "Não foi possível carregar os produtos.";
    }
}

// 2. Criar as opções do filtro a partir do JSON
function carregarCategorias() {
    catalogo.categories.forEach(function(categoria) {
        const option = document.createElement("option");


        option.value = categoria.id;
        option.textContent = categoria.name;

        categoryFilter.appendChild(option);
    });
}

// 3. Preencher o seletor de produtos do formulário
function carregarProdutosNoSelect() {
    catalogo.products.forEach(function(produto) {
        const option = document.createElement("option");


        option.value = produto.id;
        option.textContent = `${produto.name} - ${formatarPreco.format(Number(produto.price))}`;


        productSelect.appendChild(option);
    });
}

// 4. Criar e apresentar os cartões dinamicamente

function mostrarProdutos(produtos) {
    productList.replaceChildren();

    if (produtos.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Não existem produtos nesta categoria.";
        productList.appendChild(mensagem);
        return;
    }

    produtos.forEach(function(produto) {
        const coluna = document.createElement("div");
        coluna.className = "col-12 col-md-6 col-lg-4";

        const cartao = document.createElement("article");
        cartao.className = "card product-card h-100";

        const imagem = document.createElement("img");
        imagem.className = "card-img-top";
        imagem.src = produto.image;
        imagem.alt = produto.name;
        imagem.loading = "lazy";

        const corpo = document.createElement("div");
        corpo.className = "card-body d-flex flex-column";

        const titulo = document.createElement("h3");
        titulo.className = "card-title";
        titulo.textContent = produto.name;

        const descricao = document.createElement("p");
        descricao.className = "card-text";
        descricao.textContent = produto.description;

        const preco = document.createElement("p");
        preco.textContent = formatarPreco.format(Number(produto.price));

        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "btn btn-outline-light mt-auto";
        botao.textContent = "Ver Detalhes";

        botao.addEventListener("click", function() {
            abrirLightbox(produto);
        });

        corpo.append(titulo, descricao, preco, botao);
        cartao.append(imagem, corpo);
        coluna.appendChild(cartao);
        productList.appendChild(coluna);
    });
}


// 5. Filtrar produtos quando a categoria muda
categoryFilter.addEventListener("change", function() {
    const categoriaEscolhida = categoryFilter.value;

    const produtosFiltrados = categoriaEscolhida === ""
        ? catalogo.products
        : catalogo.products.filter(function(produto) {
            return produto.category === categoriaEscolhida;
        });

    mostrarProdutos(produtosFiltrados);
});

// 6. Abrir a lightbox com os detalhes de um produto
function abrirLightbox(produto) {
    lightboxTitle.textContent = produto.name;
    lightboxImage.src = produto.image;
    lightboxImage.alt = produto.name;
    lightboxDescription.textContent = produto.description;
    lightboxPrice.textContent =
        "Preço: " + formatarPreco.format(Number(produto.price));

    lightbox.hidden = false;
    closeLightbox.focus();
}

// Fechar a lightbox
function fecharLightbox() {
    lightbox.hidden = true;
}

closeLightbox.addEventListener("click", fecharLightbox);

lightbox.addEventListener("click", function(evento) {
    if (evento.target === lightbox) {
        fecharLightbox();
    }
});

document.addEventListener("keydown", function(evento) {
    if (evento.key === "Escape" && !lightbox.hidden) {
        fecharLightbox();
    }
});

// 7. Calcular o valor total e validar os dados
calcForm.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const produtoId = productSelect.value;
    const quantidadeTexto = quantityInput.value.trim();
    const quantidade = Number(quantidadeTexto);

    if (produtoId === "") {
        totalValue.textContent = "Seleciona um produto.";
        return;
    }

    if (
        quantidadeTexto === "" ||
        !Number.isInteger(quantidade) ||
        quantidade <= 0
    ) {
        totalValue.textContent =
            "Introduz uma quantidade inteira superior a zero.";
        quantityInput.focus();
        return;
    }

    const produtoEscolhido = catalogo.products.find(function(produto) {
        return produto.id === produtoId;
    });

    if (!produtoEscolhido) {
        totalValue.textContent = "Produto não encontrado.";
        return;
    }

    const total = Number(produtoEscolhido.price) * quantidade;

    totalValue.textContent =
        `${quantidade} × ${produtoEscolhido.name} = ${formatarPreco.format(total)}`;
});

// Iniciar o carregamento da loja
carregarCatalogo();
