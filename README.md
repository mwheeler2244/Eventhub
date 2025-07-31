# EventHub – Event Ticketing App

EventHub is a modern event ticketing web application built with Next.js, React, and Tailwind CSS. Users can browse upcoming events, add tickets to a shopping cart, and proceed to a simple checkout flow. The app features a clean, responsive UI and a smooth user experience.

## Features

- **Event Listing:** Browse a curated list of upcoming events with images, dates, locations, and prices.
- **Featured Event:** Prominently displays a highlighted event at the top of the homepage.
- **Search:** Quickly filter events by name using the search bar in the header.
- **Shopping Cart:** Add tickets to a cart, adjust quantities, or remove items. The cart slides in from the right and shows a running total.
- **Checkout Flow:** Simple checkout that clears the cart and displays a confirmation message.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Modern UI:** Built with Tailwind CSS and custom components for a polished look.

## Demo

To run the app locally:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/page.tsx` – Main page, event and cart logic
- `app/components/`
  - `Header.tsx` – Top navigation, search, and cart icon
  - `FeaturedEvent.tsx` – Hero section for the featured event
  - `EventList.tsx` – Grid of event cards
  - `EventCard.tsx` – Individual event display with add-to-cart
  - `Cart.tsx` – Slide-in shopping cart with checkout
  - `CartItem.tsx` – Cart item row with quantity controls
  - `Footer.tsx` – Simple footer
- `app/globals.css` – Global styles and Tailwind CSS imports

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) for linting

## Customization

- **Events:** The list of events is hardcoded in `app/page.tsx` for demo purposes. You can update or extend this array to add more events.
- **Styling:** Modify `app/globals.css` or component classes to adjust the look and feel.

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm start` – Start the production server
- `npm run lint` – Run ESLint

## License

This project is for demonstration and educational purposes.
