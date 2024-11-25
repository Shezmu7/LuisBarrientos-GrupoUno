import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product, quantity = 1, size) =>
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
        }),
    removeFromCart: (productId, size) =>
        set((state) => ({
            cart: state.cart.filter(
                (item) => item.id !== productId || item.size !== size
            ),
        })),
    clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
