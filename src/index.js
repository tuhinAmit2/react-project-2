import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarContainer from "./components/navbarContainer/NavbarContainer";
import BannerContainer from "./components/bannerContainer/BannerContainer";
import WishListContainer from "./components/wishListContainer/WishListContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <NavbarContainer/>
    {/* Forwarded Props or Proxy Props to BannerContainer */}
    <BannerContainer id="bannerContainerx"/>
    <WishListContainer id="wishListContainer"
        type="table"
    />
</React.StrictMode>);

