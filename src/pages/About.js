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
          and using them for drug discovery. In Cambridge, I have been finally involving myself in AI safety, having spent the last few years
          <i> lurking</i> in this space. Through this, I was involved in MARS 2.0, the second edition of the MARS research program.
          I was incredibly lucky to research with a great team, where we investigated using 
          {" "}<a href="https://arxiv.org/pdf/2410.04332" className="underline text-blue-600 hover:text-blue-800">Gradient Routing</a>{" "} 
          for circuit transplantation in transformer models. On top of this, I am a committee member of the Cambridge AI Safety Hub (CAISH).
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

      {/* 2. Quick Facts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>BSc @ Edinburgh — dissertation on convolutional Gaussian processes</li>
          <li>MPhil in Biotechnology @ Cambridge - dissertation on single-cell foundation models for drug discovery</li>
          <li>Interests: Machine Learning, AI ∨ Biology, UK Governance and Policy, AI Safety, Geopolitics</li>
          <li>Life Enjoyer</li>
        </ul>
      </section>

      <hr></hr>

      {/* 3. Bookshelf */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Bookshelf</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>ADD CURRENTLY READING HERE</li>
          <li>MPhil in Biotechnology @ Cambridge - dissertation on single-cell foundation models for drug discovery</li>
          <li>Interests: Machine Learning, AI ∨ Biology, UK Governance and Policy, AI Safety, Geopolitics</li>
          <li>Life Enjoyer</li>
        </ul>
      </section>

      {/* 4. Music */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Music</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          {albums.slice(0, 4).map((album, index) => (
            <div key={index} className="relative group overflow-hidden rounded shadow-lg">
              <img
                src={album.img}
                alt={album.title}
                className="w-full group-hover:opacity-30 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-90 p-4 text-sm text-center">
                <p>{album.reaction}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/music" className="text-sm text-blue-600 hover:underline">
          See all →
        </Link>
      </section>

      {/* 5. Films / Media */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top 10 Films & TV</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb</strong> (1964)</li>
          <li><strong>Everything Everywhere All at Once</strong> (2022)</li>
          <li><strong>Dazed and Confused</strong> (1993)</li>
          <li><strong>They Live</strong> (1988)</li>
          <li><strong>Total Recall</strong> (1990)</li>

  
          <li><strong>Heroes (S1) </strong> (2006)</li>
          <li><strong>The Thick of It</strong> (2005-2012)</li>
          <li><strong>Beef</strong> (2023)</li>
          <li><strong>Utopia (S1) </strong> (2013)</li>
          <li><strong>The Office (UK) </strong> (2001-2003)</li>
        </ul>
      </section>

      {/* 6. Mimetic Short-Form Video Links */}
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
