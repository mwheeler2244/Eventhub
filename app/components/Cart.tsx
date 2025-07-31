"use client";
import React from "react";
import type { Event, CartItem as CartItemType } from "../page";
import CartItem from "./CartItem";

type CartProps = {
  cart: CartItemType[];
  events: Event[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  checkout: () => void;
  getTotal: () => number;
};

export default function Cart({
  cart,
  events,
  isCartOpen,
  setIsCartOpen,
  removeFromCart,
  updateQuantity,
  checkout,
  getTotal,
}: CartProps) {
  return (
    <div
      className={`fixed top-0 right-0 w-full md:w-[420px] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex-grow overflow-auto px-8 py-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Your cart is empty
                </p>
                <p className="text-gray-500 mt-1">
                  Browse our events and add some tickets!
                </p>
              </div>
            </div>
          ) : (
            <ul className="space-y-8">
              {cart.map((item) => {
                const event = events.find((e) => e.id === item.id);
                if (!event) return null;
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    event={event}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                  />
                );
              })}
            </ul>
          )}
        </div>
        <div className="border-t border-gray-100 p-8 bg-white sticky bottom-0 z-10">
          <div className="flex justify-between mb-6">
            <span className="text-gray-600">Total</span>
            <span className="font-semibold text-lg">
              ${getTotal().toFixed(2)}
            </span>
          </div>
          <button
            onClick={checkout}
            disabled={cart.length === 0}
            className={`cursor-pointer w-full py-4 rounded-lg text-white font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
              cart.length === 0
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-gray-500 hover:bg-gray-600 transform hover:-translate-y-0.5"
            }`}
          >
            {cart.length === 0 ? "No Items in Cart" : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
}
