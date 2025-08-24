import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopContainer from "./components/shopContainer/ShopContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
        <ShopContainer/>
</React.StrictMode>);

