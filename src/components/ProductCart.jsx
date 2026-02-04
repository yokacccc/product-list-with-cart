// import React from "react";
import CartList from "./CartList";
import OrderTotal from "./OrderTotal";
import carbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";

export default function ProductCart() {
    return (
        <div className="grid gap-6 bg-white mt-8 p-6 rounded-xl">
            <p className="text-2-s text-red">Your Cart (1)</p>
            <CartList />
            <div className="decorative-line"></div>
            <OrderTotal />
            <div className=" flex gap-2 p-4 bg-rose-50 rounded-lg">
                <div>
                    <img src={carbonNeutralIcon} alt="Carbon Neutral Icon" />
                </div>
                <p className="text-4-s font-normal">
                    This is a <span className="font-semibold">carbon-neutral</span> delivery
                </p>
            </div>
            <button className="w-full px-6 py-4 rounded-[26.5px] text-3-s text-white bg-red">
                Confirm Order
            </button>
        </div>
    );
}
