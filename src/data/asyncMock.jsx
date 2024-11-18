export const products = [
    {
        id: 1,
        name: 'Terno sin camisa',
        price: 27990,
        description: 'Pantalon formal con blazer sin camisa ni corbata.',
        stock: 10,
        img: '/Image/ternosincamisa.png',
        category: 'Ternos',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'Terno Completo',
        price: 42990,
        description: 'Traje de terno completo.',
        stock: 5,
        img: '/Image/ternocompleto.png',
        category: 'Ternos',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 3,
        name: 'Blazer con camisa',
        price: 24990,
        description: 'Blazer con camisa blanca y corbata',
        stock: 5,
        img: '/Image/blazerconcamisa.png',
        category: 'Blazer',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 4,
        name: 'Terno completo',
        price: 37990,
        description: 'Terno completo rojo',
        stock: 5,
        img: '/Image/ternocompletorojo.png',
        category: 'Ternos',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        name: 'Blazer rojo con camisa',
        price: 29990,
        description: 'Blazer rojo con camisa negra',
        stock: 5,
        img: '/Image/blazerrojoconcamisa.png',
        category: 'Blazer',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 6,
        name: 'Camisa lila',
        price: 15990,
        description: 'Camisa de mangas largas de color lila',
        stock: 5,
        img: '/Image/camisalila.png',
        category: 'Camisas',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 7,
        name: 'Blazer Rojo claro',
        price: 21990,
        description: 'Blazer de color rojo claro con dobles negro',
        stock: 5,
        img: '/Image/blazerrojo.png',
        category: 'Blazer',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 8,
        name: 'Terno niño',
        price: 14990,
        description: 'Terno completo azul para niños',
        stock: 5,
        img: '/Image/ternoazulninos.png',
        category: 'Ternos',
        sizes: ['XS', 'S', 'M', 'L']
    },
    {
        id: 9,
        name: 'Blazer gris',
        price: 20990,
        description: 'Blazer gris con camisa blanca y corbata',
        stock: 5,
        img: '/Image/blazergrisconcamisa.png',
        category: 'Blazer',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 10,
        name: 'Camisa celeste',
        price: 16990,
        description: 'Camisa celeste de mangas largas',
        stock: 5,
        img: '/Image/camisaceleste.png',
        category: 'Camisas',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 11,
        name: 'Camisa celeste',
        price: 15990,
        description: 'Camisa celeste de mangas cortas',
        stock: 5,
        img: '/Image/camisacelestesinmangas.png',
        category: 'Camisas',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 12,
        name: 'Vestido Azul',
        price: 31990,
        description: 'Vestido de Gala de color azul',
        stock: 5,
        img: '/Image/vestidoazul.png',
        category: 'Vestidos',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 13,
        name: 'Blazer',
        price: 19990,
        description: 'blazer negro',
        stock: 5,
        img: '/Image/blazernegro.png',
        category: 'Blazer',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 14,
        name: 'Camisa Gris',
        price: 16990,
        description: 'Camisa gris con mangas largas',
        stock: 5,
        img: '/Image/camisagrisconmangas.png',
        category: 'Camisas',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 15,
        name: 'Camisa negra',
        price: 17990,
        description: 'Camisa negra con cuello morado',
        stock: 5,
        img: '/Image/camisaconcuellomorado.png',
        category: 'Camisas',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 16,
        name: 'Terno Completo',
        price: 17990,
        description: 'Traje de 3 piezas con camisa',
        stock: 5,
        img: '/Image/trajecompleto.png',
        category: 'Ternos',
        sizes: ['S', 'M', 'L', 'XL']
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};