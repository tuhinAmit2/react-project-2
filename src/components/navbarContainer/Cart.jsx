import {CartContext} from '../../store/shopping-cart-context';
import {useContext} from "react";

export default function Cart() {
    const {updateCartItemQuantity} = useContext(CartContext);

    return (<CartContext.Consumer>
        {(cartCtx) => {
            const totalPrice = cartCtx.items.reduce((amount, item) => amount + item.price * item.quantity, 0);
            const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
            return <div id="cart">
                {cartCtx.items.length === 0 && <p className="text-muted">No items in cart!</p>}
                {cartCtx.items.length > 0 &&
                    (<ul id="cart-items" className="list-group mb-3">
                        {cartCtx.items.map((item) => {
                            const formattedPrice = `$${item.price.toFixed(2)}`;

                            return (<li key={item.id}
                                        className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="fw-bold">{item.name}</span>
                                    <span className="text-muted"> ({formattedPrice})</span>
                                </div>
                                <div className="cart-item-actions d-flex align-items-center">
                                    <button className="btn btn-outline-secondary btn-sm me-2"
                                            onClick={() => updateCartItemQuantity(item.id, -1)}>
                                        -
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button className="btn btn-outline-secondary btn-sm ms-2"
                                            onClick={() => updateCartItemQuantity(item.id, 1)}>
                                        +
                                    </button>
                                </div>
                            </li>);
                        })}
                </ul>)}
                <p id="cart-total-price" className="fw-bold text-end">
                    Cart Total: <strong className="text-primary">{formattedTotalPrice}</strong>
                </p>
            </div>
        }}
    </CartContext.Consumer>);
}
