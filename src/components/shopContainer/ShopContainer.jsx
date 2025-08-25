import Shop from "./Shop";
import {DUMMY_PRODUCTS} from "../dummy-products";
import {Table} from "react-bootstrap";
import NavbarContainer from "../navbarContainer/NavbarContainer";
import BannerContainer from "../bannerContainer/BannerContainer";
import Product from "./product/Product";
import CartContextProvider from "../../store/shopping-cart-context";

export default function ShopContainer() {

    return (<CartContextProvider>
        <NavbarContainer/>
        <BannerContainer id="bannerContainerx"/>
        <Table>
            <tbody>
            <Shop>
                {DUMMY_PRODUCTS.map((product) => (<td key={product.id} className="card">
                    <Product {...product}/>
                </td>))}
            </Shop>
            </tbody>
        </Table>
    </CartContextProvider>);
}