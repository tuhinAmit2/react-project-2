import React, { Component } from "react";
import ProductDetails from "./ProductDetails";

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProductId: null,
        };
    }

    handleSelectProduct = (id) => {
        this.setState({ selectedProductId: id });
    };

    handleCloseDetails = () => {
        this.setState({ selectedProductId: null });
    };

    render() {
        const { selectedProductId } = this.state;

        const products = [
            { id: 1, name: "Laptop" },
            { id: 2, name: "Shoes" },
            { id: 3, name: "Headphones" },
        ];

        return (
            <div style={{ padding: "20px" }}>
                <h1>🛒 Shopping Website</h1>

                {!selectedProductId && (
                    <div>
                        <h2>Products</h2>
                        <ul>
                            {products.map((p) => (
                                <li key={p.id}>
                                    {p.name}{" "}
                                    <button onClick={() => this.handleSelectProduct(p.id)}>
                                        View Details
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {selectedProductId && (
                    <div>
                        <ProductDetails productId={selectedProductId} />
                        <button onClick={this.handleCloseDetails} style={{ marginTop: "10px" }}>
                            Close Details
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default ProductContainer;
