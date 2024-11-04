const products = [
    {
        id: 1,
        name: "Producto A",
        price: 29.99,
        category: "Electrónica",
        description: "Descripción detallada del Producto A",
        image: "path/to/imageA.jpg", // Ruta de la imagen
        stock: 10,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Producto B",
        price: 19.99,
        category: "Electrónica",
        description: "Descripción detallada del Producto B",
        image: "path/to/imageB.jpg",
        stock: 5,
        rating: 4.0,
    },
    {
        id: 3,
        name: "Producto C",
        price: 49.99,
        category: "Ropa",
        description: "Descripción detallada del Producto C",
        image: "path/to/imageC.jpg",
        stock: 3,
        rating: 3.5,
    },
    {
        id: 4,
        name: "Producto D",
        price: 99.99,
        category: "Ropa",
        description: "Descripción detallada del Producto D",
        image: "path/to/imageD.jpg",
        stock: 8,
        rating: 4.8,
    },
    {
        id: 5,
        name: "Producto E",
        price: 9.99,
        category: "Accesorios",
        description: "Descripción detallada del Producto E",
        image: "path/to/imageE.jpg",
        stock: 25,
        rating: 5.0,
    },
];

export const getProductById = async (id) => {
    await simulateLoading(1000); // Simula un tiempo de carga
    return products.find((product) => product.id === id) || null;
};

export const getProductsByCategory = async (category) => {
    await simulateLoading(1000); // Simula un tiempo de carga
    return products.filter((product) => product.category === category);
};

export const getCategories = async () => {
    await simulateLoading(1000); // Simula un tiempo de carga
    const categories = [...new Set(products.map((product) => product.category))];
    return categories;
};

// Aun no implemento el asyncMock