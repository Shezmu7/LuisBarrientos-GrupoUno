import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    cart: [],
    addToCart: (product, quantity = 1, size) => {
        const stockAvailable = product.stock;
        const currentQuantityInCart = get().cart.filter(
            (item) => item.id === product.id && item.size === size
        ).reduce((acc, item) => acc + item.quantity, 0);

        const newQuantity = currentQuantityInCart + quantity;

        if (newQuantity <= stockAvailable) {
            set((state) => {
                const existingProduct = state.cart.find(
                    (item) => item.id === product.id && item.size === size
                );
                if (existingProduct) {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === product.id && item.size === size
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                    };
                } else {
                    return {
                        cart: [
                            ...state.cart,
                            { ...product, quantity, size },
                        ],
                    };
                }
            });
        } else {
            alert(`No puedes agregar más de ${stockAvailable} unidades de este producto.`);
        }
    },
    removeFromCart: (productId, size) =>
        set((state) => ({
            cart: state.cart.filter(
                (item) => item.id !== productId || item.size !== size
            ),
        })),
    clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
