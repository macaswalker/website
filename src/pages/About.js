import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-black">
      {/* 1. About Me */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg leading-relaxed">
          I’m currently pursuing an MPhil in Biotechnology at the University of Cambridge, focused on the intersection of AI, biology, and public policy. My interests revolve around building systems that interpret the world, shape institutions, and prepare society for weird futures.
        </p>
      </section>

      {/* 2. Quick Facts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>BSc @ Edinburgh — dissertation on convolutional Gaussian processes</li>
          <li>MPhil in Biotechnology @ Cambridge - dissertation on single-cell foundation models for drug discovery</li>
          <li>Into: AI ∨ Biology, UK Governance </li>
          <li>Can code • Can write (questionable?) • Can kick a football (mostly)</li>
        </ul>
      </section>

      {/* 3. Music I Like */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Music I Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Blonde", artist: "Frank Ocean", img: "/albums/blonde.jpg", reaction: "Spacious, devastating, timeless." },
            { title: "Kid A", artist: "Radiohead", img: "/albums/kid-a.jpg", reaction: "Post-human anxiety in sonic form." },
            { title: "Blackstar", artist: "David Bowie", img: "/albums/blackstar.jpg", reaction: "A ghost in a jazz suit. Final form." },
            { title: "For Emma", artist: "Bon Iver", img: "/albums/boniver.jpg", reaction: "Woodsmoke, heartbreak, reverb." },
          ].map((album, index) => (
            <div key={index} className="group relative cursor-pointer">
              <img
                src={album.img}
                alt={album.title}
                className="w-full h-auto rounded shadow-lg group-hover:opacity-30 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-90 text-center p-4 text-sm">
                <p>{album.reaction}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Films / Media */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Films & TV I Like</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Stalker</strong> (1979) — a meditation on unknowability, memory, and desire</li>
          <li><strong>The Wire</strong> — systems thinking in narrative form</li>
          <li><strong>Arrival</strong> — nonlinear time, language, hope</li>
          <li><strong>Internet culture</strong> — the weirder, the better</li>
        </ul>
      </section>

      {/* 5. Mimetic Short-Form Video Links */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Short-Form Video Content</h2>
        <p className="mb-4 text-lg">
          I love to collect short-form video content that has strong cultural or emotional resonance - I believe that these are the most powerful mimetic devices that currently exist. Here are some of my favourites:
        </p>
        <ul className="space-y-2 text-blue-600 underline">
          <li><Link to="/videos/loss">Loss & Memory</Link></li>
          <li><Link to="/videos/weird-tech">Weird Tech & Poetic Interfaces</Link></li>
          <li><Link to="/videos/mirrors">Mirrors, Masks, and Doubles</Link></li>
        </ul>
      </section>
    </div>
  );
}
