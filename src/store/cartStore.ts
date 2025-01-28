import { create } from "zustand";

// Typ produktu
type Product = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number;
  quantity: number;
};

// Typ stavu košíka
interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  // Pridanie produktu do košíka
  addToCart: (product: Product) => {
    const cart = get().cart;
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Aktualizuj množstvo
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        ),
      });
    } else {
      // Pridaj nový produkt
      set({ cart: [...cart, product] });
    }
  },

  removeFromCart: (productId: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  // Vyčistenie celého košíka
  clearCart: () => set({ cart: [] }),

  // Počet položiek v košíku
  totalItems: 0,

  // Celková cena položiek v košíku
  totalPrice: 0,
}));

export const useCartStoreWithTotals = () => {
  const state = useCartStore();
  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return { ...state, totalItems, totalPrice };
};

export default useCartStore;
