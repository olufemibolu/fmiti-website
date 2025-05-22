// Ensure Vercel tracks this file
import React from 'react';

export default function MusicSchoolPage() {
  return (
    <div className="p-6 space-y-6 text-center">
      <h1 className="text-3xl font-bold">FMITI Music School</h1>
      <p className="text-gray-600">
        Learn piano, guitar, drums, voice, and more — from beginners to advanced musicians.
      </p>
      <a
        href="https://www.fmiticlass.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow"
      >
        Register Now
      </a>
    </div>
  );
}
