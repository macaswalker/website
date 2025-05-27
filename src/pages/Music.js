// src/pages/Music.js
import React from "react";
import albums from "../data/albums";

export default function Music() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-black">
      <h1 className="text-4xl font-bold mb-8">Music</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {albums.map((album, index) => (
          <a
            key={index}
            href={album.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded overflow-hidden shadow-lg transition transform hover:scale-105"
          >
            <img
              src={album.img}
              alt={`${album.title} by ${album.artist}`}
              className="w-full aspect-square object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
