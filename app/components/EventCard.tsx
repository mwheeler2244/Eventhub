"use client";
import React from "react";
import type { Event } from "../page";

type EventCardProps = {
  event: Event;
  addToCart: (id: number) => void;
};

export default function EventCard({ event, addToCart }: EventCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative w-full h-48">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <div className="flex justify-between p-6 items-start mb-2">
          <h3 className="text-xl font-medium">{event.name}</h3>
          <span className="text-black font-medium">${event.price}</span>
        </div>
        <span className="text-indigo-900 font-bold px-6">{event.location}</span>
        <p className="text-gray-500 px-6 mt-1 mb-6">{event.date}</p>
        <button
          onClick={() => addToCart(event.id)}
          className="cursor-pointer w-full py-3 px-6 bg-black text-white  font-medium hover:bg-stone-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
