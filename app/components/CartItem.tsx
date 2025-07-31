"use client";
import React from "react";
import type { Event, CartItem as CartItemType } from "../page";

type CartItemProps = {
  item: CartItemType;
  event: Event;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
};

export default function CartItem({
  item,
  event,
  removeFromCart,
  updateQuantity,
}: CartItemProps) {
  return (
    <li className="flex items-start space-x-4 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
      <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">{event.name}</h4>
            <p className="text-sm text-gray-500">{event.date}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer p-1.5 hover:bg-red-50 rounded-full transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-500"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </button>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="inline-flex items-center px-2 py-1 bg-gray-50 rounded-lg text-sm gap-3">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none w-6 h-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span className="text-gray-800 w-6 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none w-6 h-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          <span className="font-medium text-gray-900">
            ${(event.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </li>
  );
}
