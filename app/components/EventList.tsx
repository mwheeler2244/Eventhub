"use client";
import React from "react";
import type { Event } from "../page";
import EventCard from "./EventCard";

type EventListProps = {
  events: Event[];
  addToCart: (id: number) => void;
};

export default function EventList({ events, addToCart }: EventListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} addToCart={addToCart} />
      ))}
    </div>
  );
}
