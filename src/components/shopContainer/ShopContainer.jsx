import React, {useState} from "react";
import Shop from "./Shop";
import {DUMMY_PRODUCTS} from "../dummy-products";
import {Table} from "react-bootstrap";
import NavbarContainer from "../navbarContainer/NavbarContainer";
import BannerContainer from "../bannerContainer/BannerContainer";
import Product from "./product/Product";

export default function ShopContainer() {

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });

    function handleAddItemToCart(id) {
        console.log("Adding item to cart with id:", id);
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];

            const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === id);
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem, quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === id);
                updatedItems.push({
                    id: id, name: product.title, price: product.price, quantity: 1,
                });
            }
            return {
                items: updatedItems,

            };
        });
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex((item) => item.id === productId);

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    }

    return (<>
        <NavbarContainer cart={shoppingCart}
                         onUpdateCartItemQuantity={handleUpdateCartItemQuantity}/>
        <BannerContainer id="bannerContainerx"/>
        <Table>
            <tbody>
            <Shop>
                    {DUMMY_PRODUCTS.map((product) => (<td key={product.id} className="card">
                        <Product {...product} onAddToCart={handleAddItemToCart}/>
                    </td>))}
            </Shop>
            </tbody>
        </Table>
    </>);
}