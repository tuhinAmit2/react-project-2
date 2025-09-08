import Shop from "./Shop";
import {Table} from "react-bootstrap";
import NavbarContainer from "../navbarContainer/NavbarContainer";
import BannerContainer from "../bannerContainer/BannerContainer";
import Product from "./product/Product";
import CartContextProvider from "../../store/shopping-cart-context";
import {useEffect,useState} from "react";

export default function ShopContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        fetch('http://localhost:8080/api/products')
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((resData) => {
                console.log(resData);
                setProducts(resData);
            });
    }, []);


    return (<CartContextProvider>
        <NavbarContainer/>
        <BannerContainer id="bannerContainerx"/>
        <Table>
            <tbody>
            <Shop>
                {products.map((product) => (<td key={'p'+product.id} className="card">
                    <Product {...product}/>
                </td>))}
            </Shop>
            </tbody>
        </Table>
    </CartContextProvider>);
}