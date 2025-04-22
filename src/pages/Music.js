// src/pages/Music.js
import React from "react";
import albums from "../data/albums";

export default function Music() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-black">
      <h1 className="text-4xl font-bold mb-8">Music</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {albums.map((album, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded shadow-lg"
          >
            <img
              src={album.img}
              alt={album.title}
              className="w-full aspect-square object-cover group-hover:opacity-30 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-90 p-4 text-sm text-center">
              <p>{album.reaction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
