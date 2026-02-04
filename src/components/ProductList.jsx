import React from "react";
import ProductCard from "./ProductCard";
import data from "../data/data.json";

export default function ProductList() {
    const image = "mobile";

    return (
        <div>
            {data.map((item) => (
                <ProductCard
                    key={item.name}
                    image={item.image[image]}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                />
            ))}
        </div>
    );
}
