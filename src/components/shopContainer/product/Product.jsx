import './product.css';
import { CartContext} from "../../navbarContainer/store/shopping-cart-context";
import {useContext} from "react";

export default function Product({
                                    id, image, title, price, description
                                }) {
    const {addItemToCart} = useContext(CartContext);
    return (<article className="card">
        <div className="product-content">
            <div>
                <img src={image} alt={title} className="product-image"/>
                <h3>{title}</h3>
                <p className='product-price'>${price}</p>
                <p className="card-text">{description}</p>
            </div>
            <p className='product-actions'>
                <button onClick={() => addItemToCart(id)}>Add to Cart</button>
            </p>
        </div>
    </article>);
}
