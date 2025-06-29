import React from "react";
import albums from "../data/albums";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-black">
      {/* 1. About Me */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        {/* Now */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Now</h2>
          <p className="text-lg leading-relaxed">
          I’m currently pursuing an MPhil in Biotechnology at the University of Cambridge, focusing on the intersection of AI and biology. Specifically, I am looking at single-cell foundation models
          and using them for drug discovery. I am part of MARS (Mentorship for Alignment Research Students)
          where we are investigating using Gradient Routing for circuit transplantation in transformer models. On top of this, I am a committee member of the Cambridge AI Safety Hub (CAISH).
          I am also currently a baby VC fellow.
          </p>
        </div>

        {/* Before */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Before</h2>
          <p className="text-lg leading-relaxed">
            I previously completed my BSc in Mathematics at the University of Edinburgh. My dissertation focused on convolutional Gaussian Processes,
            which are a beautiful method for using Gaussian Processes for images (or even <i> any</i> graph-structured data). During my time in Edinburgh, I interned at 
            {" "}<a href="https://opteran.com/" className="underline text-blue-600 hover:text-blue-800">Opteran</a>{" "} 
            as research engineer, and 
            {" "}<a href="https://www.woodmac.com/" className="underline text-blue-600 hover:text-blue-800">Wood Mackenzie</a>{" "} 
            on the product team.
            In my 3rd year, I went to Nanyang Technological University in Singapore. This was a wonderful experience which not only made me 10x more motivated and aspirational, but also
            inspired a lot of my thoughts around the UK and how to make it better. During my time at undergrad, I played football for the university.
          </p>
        </div>

        {/* Much Before */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Much Before</h2>
          <p className="text-lg leading-relaxed">
            I grew up in Sheffield, a city in the North of England (also the best city in the world). As a teen, I went on 
            {" "}<a href="https://wiki.apterous.org/Mac_Walker" className="underline text-blue-600 hover:text-blue-800">Countdown</a>{" "}
            and won 4 games, finishing 9th in Series 78.
          </p>
        </div>
      </section>


    {/* 3. Music */}
    <section className="mb-12">
      <h2 className="text-4xl font-bold mb-6">Music</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
        {albums.slice(-4).map((album, index) => (
          <a
            key={index}
            href={album.link}
            target="_blank"
            rel="noopener noreferrer"
            title={album.reaction} // optional: tooltip
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
      <Link to="/music" className="text-sm text-blue-600 hover:underline">
        See all →
      </Link>
    </section>


    {/* 5. Quotes */}
    <section className="mb-12">
      <h2 className="text-4xl font-bold mb-6">Quotes</h2>
      <ul className="list-disc list-inside space-y-4 text-lg italic">
        <li>“We’re an empire now, and when we act, we create our own reality. And while you’re studying that reality — judiciously, as you will — we’ll act again, creating other new realities, which you can study too, and that’s how things will sort out. We’re history’s actors . . . and you, all of you, will be left to just study what we do.” - Karl Rove, 2004 </li>
        <li>"There must be another room, somewhere down the hall, where the real meeting is happening, where the real experts are, making the real decisions ... because it can’t just be us. It can’t just be this.” - Jake Sullivan, 2013</li>
        <li>"If the scientists have the future in their bones, then the traditional culture responds by wishing the future did not exist.” - C. P. Snow, 1959</li>
      </ul>
    </section>
    </div>

    
  );
}
