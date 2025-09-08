import { createContext, useReducer, useState, useEffect } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateCartItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];
        const existingCartItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            updatedItems[existingCartItemIndex] = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
        } else {
            // ✅ Now using products from state
            const product = action.products.find(
                (product) => product.id === action.payload
            );
            if (product) {
                updatedItems.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                });
            }
        }
        return { ...state, items: updatedItems };
    }

    if (action.type === "UPDATE_ITEM") {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
        );
        const updatedItem = { ...updatedItems[updatedItemIndex] };
        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems };
    }

    return state;
}

export default function CartContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        shoppingCartReducer,
        { items: [] }
    );

    const [products, setProducts] = useState([]);

    // ✅ Fetch products from backend
    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then((response) => response.json())
            .then((resData) => {
                setProducts(resData);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id,
            products: products, // ✅ pass products into reducer
        });
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: { productId, amount },
        });
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateCartItemQuantity: handleUpdateCartItemQuantity,
    };

    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    );
}