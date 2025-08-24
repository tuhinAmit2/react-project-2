import './product.css';

export default function Product({
                                    id, image, title, price, description, onAddToCart,
                                }) {
    return (<article className="card">
        <div className="product-content">
            <div>
                <img src={image} alt={title} className="product-image"/>
                <h3>{title}</h3>
                <p className='product-price'>${price}</p>
                <p className="card-text">{description}</p>
            </div>
            <p className='product-actions'>
                <button onClick={() => onAddToCart(id)}>Add to Cart</button>
            </p>
        </div>
    </article>);
}
