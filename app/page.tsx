"use client";
import { useState } from "react";
import { Lora } from "next/font/google";
import Header from "./components/Header";
import FeaturedEvent from "./components/FeaturedEvent";
import EventList from "./components/EventList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

type Event = {
  id: number;
  name: string;
  date: string;
  price: number;
  image: string;
  location: string;
};

type CartItem = {
  id: number;
  quantity: number;
};

export type { Event, CartItem };
export default function Home() {
  const events: Event[] = [
    {
      id: 1,
      name: "Music Man Fest",
      date: "June 15, 2025",
      price: 50,
      location: "Central Park",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 2,
      name: "Tech Expo",
      date: "July 20, 2025",
      price: 100,
      location: "Convention Center",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 3,
      name: "Art Gala",
      date: "August 5, 2025",
      price: 30,
      location: "Metropolitan Museum",
      image:
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 4,
      name: "Food Festival",
      date: "September 12, 2025",
      price: 45,
      location: "Riverside Plaza",
      image:
        "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Film Premiere",
      date: "October 3, 2025",
      price: 75,
      location: "Grand Theater",
      image:
        "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 6,
      name: "Science Conference",
      date: "November 15, 2025",
      price: 120,
      location: "University Auditorium",
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);
  const [message, setMessage] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (id: number) => {
    setCart((prev) =>
      prev.some((item) => item.id === id)
        ? prev.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prev, { id, quantity: 1 }]
    );

    const event = events.find((e) => e.id === id);
    setMessage(`Added ${event?.name} ticket!`);
    setTimeout(() => setMessage(""), 2000);
  };

  const getTotal = () =>
    cart.reduce((sum, item) => {
      const event = events.find((e) => e.id === item.id);
      return sum + (event?.price || 0) * item.quantity;
    }, 0);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const checkout = () => {
    setCart([]);
    setMessage("Please check your email for checkout details!");
    setIsCartOpen(false);
    setTimeout(() => setMessage(""), 3000);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div
      className={`${lora.className} min-h-screen bg-gray-50 text-gray-900 font-sans`}
    >
      {message && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 bg-white shadow-lg rounded-lg text-center border-l-4 border-black min-w-80">
          {message}
        </div>
      )}

      <Header
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItemCount}
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
      />

      <FeaturedEvent event={events[0]} addToCart={addToCart} />

      <main className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          More Upcoming Events
        </h2>
        <EventList events={filteredEvents} addToCart={addToCart} />
      </main>

      <Cart
        cart={cart}
        events={events}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        checkout={checkout}
        getTotal={getTotal}
      />

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      <Footer />
    </div>
  );
}
