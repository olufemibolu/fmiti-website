import React from 'react';

export default function RetailPage() {
  return (
    <div className="p-6 space-y-6 text-center">
      <h1 className="text-3xl font-bold">Retail Store</h1>
      <p className="text-gray-600">
        Guitars, keyboards, gear, and accessories — everything you need to make music.
      </p>
      <a
        href="/contact"
        className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-xl shadow"
      >
        Contact Us to Shop
      </a>
    </div>
  );
}
