"use client";
import React from "react";

type HeaderProps = {
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItemCount: number;
  setIsCartOpen: (open: boolean) => void;
  isCartOpen: boolean;
};

export default function Header({
  isSearchOpen,
  setIsSearchOpen,
  searchQuery,
  setSearchQuery,
  cartItemCount,
  setIsCartOpen,
  isCartOpen,
}: HeaderProps) {
  return (
    <header className="bg-black shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-medium text-white flex items-center gap-2">
          {/* Logo SVG */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M16 4C13.2311 4 10.5243 4.82109 8.22202 6.35943C5.91973 7.89777 4.12532 10.0816 3.06569 12.6408C2.00607 15.2 1.72882 18.0144 2.26901 20.7279C2.80921 23.4414 4.14258 25.9351 6.10051 27.8995C8.05845 29.8574 10.5586 31.1908 13.2721 31.731C15.9856 32.2712 18.8 31.9939 21.3592 30.9343C23.9184 29.8747 26.1022 28.0803 27.6406 25.778C29.1789 23.4757 30 20.7689 30 18"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M16 4C18.7689 4 21.4757 4.82109 23.778 6.35943C26.0803 7.89777 27.8747 10.0816 28.9343 12.6408C29.9939 15.2 30.2712 18.0144 29.731 20.7279C29.1908 23.4414 27.8574 25.9351 25.8995 27.8995C23.9415 29.8574 21.4414 31.1908 18.7279 31.731C16.0144 32.2712 13.2 31.9939 10.6408 30.9343C8.08158 29.8747 5.89777 28.0803 4.35943 25.778C2.82109 23.4757 2 20.7689 2 18"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="opacity-40"
            />
          </svg>
          EventHub
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="cursor-pointer p-2 text-white hover:text-gray-300 transition"
          >
            {/* Search Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="cursor-pointer relative p-2 text-white hover:text-gray-400 transition"
          >
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
      {/* Search Bar */}
      <div
        className={`w-full bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isSearchOpen
            ? "max-h-16 opacity-100 py-3"
            : "max-h-0 opacity-0 py-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
