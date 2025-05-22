import React from 'react';

export default function StudioPage() {
  return (
    <div className="p-6 space-y-6 text-center">
      <h1 className="text-3xl font-bold">Music Studio Services</h1>
      <p className="text-gray-600">
        Record, mix, master, or rehearse in our professional studio environment.
      </p>
      <a
        href="/studio/request"
        className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-xl shadow"
      >
        Request a Session
      </a>
    </div>
  );
}
