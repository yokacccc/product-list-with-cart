import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// 导入数据
import productDate from "../data/data.json";

const useCartStore = create(
    immer((set) => ({
        // 商品初始化数据
        products: productDate,
        // 购物车清单
        cart: [],

        // 添加到购物车
        addToCart: (product) =>
            set((state) => {
                const existingItem = state.cart.find((item) => item.name === product.name);

                if (existingItem) {
                    existingItem += 1;
                } else {
                    state.cart.push({ ...product, quantity: 1 });
                }
            }),

        // 移除用户选定的item
        removeFromCart: (productName) =>
            set((state) => {
                const index = state.cart.findIndex((item) => item.name === productName);
                if (index !== -1) state.cart.splice(index, 1);
            }),

        // 增加购物车数量
        incrementProduct: (productName) =>
            set((state) => {
                const item = state.cart.find((item) => item.name === productName);
                if (item) {
                    item.quantity += 1;
                }
            }),

        // 减少购物车数量
        decrementProduct: (productName) =>
            set((state) => {
                const item = state.cart.find((item) => item.name === productName);
                if (item) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        const index = state.cart.findIndex((i) => i.name === productName);
                        state.cart.splice(index, 1);
                    }
                }
            }),
    })),
);
