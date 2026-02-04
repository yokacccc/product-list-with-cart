import React from "react";
import OrderConfirmedIcon from "/assets/images/icon-order-confirmed.svg";
import OrderItemDetail from "./OrderItemDetail";
import OrderTotal from "./OrderTotal";

export default function ConfirmnedPage() {
    return (
        <div className="grid gap-8 bg-white pt-10 px-6 pm-6 mt-5">
            <div className="grid gap-6">
                <div>
                    <img src={OrderConfirmedIcon} alt="Order Confirmed Icon" />
                </div>
                <div className="grid gap-2">
                    <h2 className="text-1-s leading-[120%]">Order Confirmed</h2>
                    <p className="text-rose-500 font-normal">We hope you enjoy your food!</p>
                </div>
            </div>
            <div className="grid gap-6 bg-rose-50 p-6">
                <OrderItemDetail />
                <div className="decorative-line"></div>
                <OrderTotal />
            </div>
            <button className="w-full px-6 py-4 rounded-[26.5px] text-3-s text-white bg-red">
                Start New Order
            </button>
        </div>
    );
}
