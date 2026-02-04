import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductCart from "./components/ProductCart";
import ConfirmnedPage from "./components/ConfirmnedPage";

export default function App() {
    return (
        <div className="container">
            <h1 className="mb-8">Desserts</h1>
            <ProductList />
            <ProductCart />
            <ConfirmnedPage />
        </div>
    );
}
