import {createContext} from "react";

//Object That contains a react component which will be used later
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}
});