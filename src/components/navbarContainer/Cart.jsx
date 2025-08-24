export default function Cart({items, onUpdateItemQuantity}) {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (<div id="cart">
            {items.length === 0 && <p className="text-muted">No items in cart!</p>}
            {items.length > 0 && (<ul id="cart-items" className="list-group mb-3">
                    {items.map((item) => {
                        const formattedPrice = `$${item.price.toFixed(2)}`;

                        return (<li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="fw-bold">{item.name}</span>
                                    <span className="text-muted"> ({formattedPrice})</span>
                                </div>
                                <div className="cart-item-actions d-flex align-items-center">
                                    <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => onUpdateItemQuantity(item.id, -1)}>
                                        -
                                    </button>
                                    <span  className="px-2">{item.quantity}</span>
                                    <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => onUpdateItemQuantity(item.id, 1)}>
                                        +
                                    </button>
                                </div>
                            </li>);
                    })}
                </ul>)}
            <p id="cart-total-price" className="fw-bold text-end">
                Cart Total: <strong className="text-primary">{formattedTotalPrice}</strong>
            </p>
        </div>);
}
