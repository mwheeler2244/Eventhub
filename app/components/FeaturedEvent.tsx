"use client";
import React from "react";
import type { Event } from "../page";

type FeaturedEventProps = {
  event: Event;
  addToCart: (id: number) => void;
};

export default function FeaturedEvent({
  event,
  addToCart,
}: FeaturedEventProps) {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
        <div className="container mx-auto">
          <span className="inline-block text-sm mb-4">Featured Event</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{event.name}</h2>
          <p className="text-xl md:text-2xl mb-6">{event.date}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => addToCart(event.id)}
              className="cursor-pointer py-2 px-4 lg:py-4 lg:px-8 md:py-3 md:px-6 bg-slate-200 text-black font-medium  hover:bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Get Tickets - ${event.price}
            </button>
            <span className="text-white/80">Limited spots available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
