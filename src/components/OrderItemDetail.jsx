import React from "react";
import deletIcon from "/assets/images/icon-remove-item.svg";

export default function OrderItemDetail() {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p>Classic Tiramisu</p>
                <div className="flex gap-2">
                    <p className="mr-2 text-red">1x</p>
                    <p className="text-4-s text-rose-500 font-normal">@ $5.50</p>
                    <p className="text-4-s text-rose-500">$5.50</p>
                </div>
            </div>
            <button className="grid place-content-center h-[17.5px] w-[17.5px] border border-rose-400 rounded-[10px] cursor-pointer">
                <img src={deletIcon} alt="delet icon" />
            </button>
        </div>
    );
}
