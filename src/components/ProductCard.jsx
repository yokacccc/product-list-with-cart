import React from "react";
import AddToCardBtn from "./AddToCardBtn";

export default function ProductCard({ image, name, category, price }) {
    return (
        <div>
            <div>
                <div>
                    <img src={image} alt={name} />
                </div>
                <AddToCardBtn />
            </div>
            <div>
                <p>{category}</p>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}
