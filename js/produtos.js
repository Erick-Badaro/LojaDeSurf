const produtos = [
    {
        id: 1,
        nome: 'Prancha Pyzel 1',
        preco: 'R$ 0',
        imagem: '/images/pranchas/pyzel1.png',
        marca: 'marca1'
    },
    {
        id: 2,
        nome: 'Prancha Pyzel 2',
        preco: 'R$ 0',
        imagem: '/images/pranchas/pyzel2.png',
        marca: 'marca1'
    },
    {
        id: 3,
        nome: 'Prancha Pyzel 3',
        preco: 'R$ 0',
        imagem: '/images/pranchas/pyzel3.png',
        marca: 'marca1'
    },
    {
        id: 4,
        nome: 'Prancha Pyzel 4',
        preco: 'R$ 0',
        imagem: '/images/pranchas/pyzel4.png',
        marca: 'marca1'
    },
    {
        id: 5,
        nome: 'Prancha Pyzel 5',
        preco: 'R$ 0',
        imagem: '/images/pranchas/pyzel5.png',
        marca: 'marca1'
    },
    {
        id: 6,
        nome: 'Prancha Merrick 1',
        preco: 'R$ 0',
        imagem: '/images/pranchas/al merrick1.png',
        marca: 'marca2'
    },
    {
        id: 7,
        nome: 'Prancha Merrick 2',
        preco: 'R$ 0',
        imagem: '/images/pranchas/al merrick2.png',
        marca: 'marca2'
    },
    {
        id: 8,
        nome: 'Prancha Merrick 3',
        preco: 'R$ 0',
        imagem: '/images/pranchas/al merrick3.png',
        marca: 'marca2'
    },
    {
        id: 9,
        nome: 'Prancha Merrick 4',
        preco: 'R$ 0',
        imagem: '/images/pranchas/al merrick4.png',
        marca: 'marca2'
    },
    {
        id: 10,
        nome: 'Prancha Merrick 5',
        preco: 'R$ 0',
        imagem: '/images/pranchas/al merrick5.png',
        marca: 'marca2'
    },
    {
        id: 11,
        nome: 'Prancha Sharpeye 1',
        preco: 'R$ 0',
        imagem: '/images/pranchas/sharpeye1.png',
        marca: 'marca3'
    },
    {
        id: 12,
        nome: 'Prancha Sharpeye 2',
        preco: 'R$ 0',
        imagem: '/images/pranchas/sharpeye2.png',
        marca: 'marca3'
    },
    {
        id: 13,
        nome: 'Prancha Sharpeye 3',
        preco: 'R$ 0',
        imagem: '/images/pranchas/sharpeye3.png',
        marca: 'marca3'
    },
    {
        id: 14,
        nome: 'Prancha Sharpeye 4',
        preco: 'R$ 0',
        imagem: '/images/pranchas/sharpeye4.png',
        marca: 'marca3'
    },
    {
        id: 15,
        nome: 'Prancha Lost 1',
        preco: 'R$ 0',
        imagem: '/images/pranchas/lost1.png',
        marca: 'marca4'
    },
    {
        id: 16,
        nome: 'Prancha Lost 2',
        preco: 'R$ 0',
        imagem: '/images/pranchas/lost2.png',
        marca: 'marca4'
    },
    {
        id: 17,
        nome: 'Prancha Lost 3',
        preco: 'R$ 0',
        imagem: '/images/pranchas/lost3.png',
        marca: 'marca4'
    },
    {
        id: 18,
        nome: 'Prancha Lost 4',
        preco: 'R$ 0',
        imagem: '/images/pranchas/lost4.png',
        marca: 'marca4'
    },
    {
        id: 19,
        nome: 'Prancha Lost 5',
        preco: 'R$ 0',
        imagem: '/images/pranchas/lost5.png',
        marca: 'marca4'
    }
];


const container = document.getElementById('produtos-container');
const checkboxes = document.querySelectorAll('input[name="marca"]');


function exibirProdutos(lista) {
    container.innerHTML = '';

    if (lista.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    lista.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
    `;
        container.appendChild(div);
    });
}


function filtrarProdutos() {
    const marcasSelecionadas = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    if (marcasSelecionadas.length === 0) {
        exibirProdutos(produtos);
    } else {
        const filtrados = produtos.filter(p =>
            marcasSelecionadas.includes(p.marca)
        );
        exibirProdutos(filtrados);
    }
}


checkboxes.forEach(cb => {
    cb.addEventListener('change', filtrarProdutos);
});


exibirProdutos(produtos);
