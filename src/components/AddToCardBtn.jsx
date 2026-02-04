import React from "react";

import CartIcon from "/assets/images/icon-add-to-cart.svg";

export default function AddToCardBtn() {
    return (
        <button className="flex justify-center items-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border border-rose-400 bg-white h-11 w-40 rounded-[22px] p-4 cursor-pointer">
            <img src={CartIcon} alt="cart icon" />
            <span className="text-4-s">Add to Cart</span>
        </button>
    );
}
