import React from 'react';

export default function HomePage() {
  return (
    <div className="p-6 space-y-6 text-center">
      <h1 className="text-4xl font-bold">Explore Your Passion for Music</h1>
      <p className="text-gray-600 text-lg">Learn. Create. Shop. All in one place.</p>

      <div className="flex justify-center gap-4 mt-4">
        <a href="/music-school" className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow">FMITI Music School</a>
        <a href="/studio" className="px-4 py-2 bg-green-600 text-white rounded-xl shadow">Studios</a>
        <a href="/retail" className="px-4 py-2 bg-purple-600 text-white rounded-xl shadow">Retail</a>
      </div>
    </div>
  );
}
