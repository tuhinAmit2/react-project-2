import React, { Component } from "react";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            loading: true,
        };
        console.log("🔹 Constructor: Component initialized");
    }

    // Mounting Phase: Fetch product details
    componentDidMount() {
        console.log("🔹 componentDidMount: Fetching product data...");
        this.fetchProduct(this.props.productId);
    }

    // Updating Phase: Run when productId changes
    componentDidUpdate(prevProps) {
        if (prevProps.productId !== this.props.productId) {
            console.log("🔹 componentDidUpdate: Product ID changed, fetching new data...");
            this.fetchProduct(this.props.productId);
        }
    }

    // Unmounting Phase: Cleanup
    componentWillUnmount() {
        console.log("🔹 componentWillUnmount: Cleaning up product details...");
        // Example: cancel API calls, clear intervals
    }

    // Helper: Simulate API call
    fetchProduct = (id) => {
        this.setState({ loading: true });
        setTimeout(() => {
            const fakeProducts = {
                1: { name: "Laptop", price: 50000, description: "High-performance laptop" },
                2: { name: "Shoes", price: 2000, description: "Comfortable running shoes" },
                3: { name: "Headphones", price: 3000, description: "Noise-cancelling headphones" },
            };
            this.setState({
                product: fakeProducts[id],
                loading: false,
            });
        }, 1000);
    };

    render() {
        if (this.state.loading) {
            return <p>Loading product details...</p>;
        }

        if (!this.state.product) {
            return <p>Product not found.</p>;
        }

        const { name, price, description } = this.state.product;

        return (
            <div>
                <h2>{name}</h2>
                <p>Price: ₹{price}</p>
                <p>{description}</p>
            </div>
        );
    }
}

export default ProductDetails;