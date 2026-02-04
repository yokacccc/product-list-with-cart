// import React from "react";
import AddToCardBtn from "./AddToCardBtn";

export default function ProductCard({ image, name, category, price }) {
    return (
        <div>
            <div className="relative ">
                <div>
                    <img src={image} alt={name} className="rounded-lg w-full" />
                </div>
                <AddToCardBtn />
            </div>
            <div className="grid gap-1 mt-4">
                <p className="text-4-s text-rose-500 font-normal">{category}</p>
                <p className="text-3-s">{name}</p>
                <p className="text-3-s text-red">{price.toFixed(2)}</p>
            </div>
        </div>
    );
}
