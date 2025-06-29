import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getRecentPosts } from "../data/blog/index";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const quoteRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = canScroll ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [canScroll]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!canScroll) {
        const newPosition = Math.min(Math.max(0, scrollPosition + e.deltaY * 0.5), 600);
        setScrollPosition(newPosition);
        if (newPosition >= 600) {
          setCanScroll(true);
        } else if (canScroll && newPosition < 600) {
          setCanScroll(false);
        }
        if (newPosition < 600) e.preventDefault();
      } else if (window.scrollY <= 50 && e.deltaY < 0) {
        setCanScroll(false);
        setScrollPosition(Math.max(0, scrollPosition + e.deltaY * 0.5));
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [canScroll, scrollPosition]);

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (!canScroll) {
        setScrollPosition((pos) => {
          const newPos = Math.min(pos + 30, 600); // tweak sensitivity if needed
          if (newPos >= 600) {
            setCanScroll(true);
          }
          return newPos;
        });
        e.preventDefault();
      }
    };
  
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => window.removeEventListener("touchmove", handleTouchMove);
  }, [canScroll]);
  


  const curveProgress = Math.min(scrollPosition / 500, 1);
  const quoteSize = Math.max(1.0 - curveProgress * 0.7, 0.3);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div
          ref={quoteRef}
          className="absolute z-10 text-black px-4 py-2 text-center"
          style={{ maxWidth: "90vw", top: "25%" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light italic">
              Gradually,
            </p>
            {curveProgress > 0.8 && (
              <p className="text-2xl md:text-3xl lg:text-4xl font-light italic mt-4">
                then suddenly.
              </p>
            )}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
            <path
              d={`
                M 100,400
                ${Array.from(
                  { length: Math.min(100, Math.floor(150 * curveProgress)) },
                  (_, i) => {
                    const x = 100 + i * 8;
                    const mathX = -30 + (i / 100) * 33.75;
                    const a = 0.005;
                    const b = 0.5;
                    const expValue = a * Math.exp(b * mathX);
                    const y = 400 - expValue * 25000;
                    const safeY = Math.min(y, 400);
                    return `L ${x},${safeY}`;
                  }
                ).join(" ")}
              `}
              fill="none"
              stroke="#000000"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 transition-opacity duration-500 ${
            scrollPosition > 100 ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="mb-2 text-sm">Scroll to continue</p>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent transition-opacity duration-500 ${
            canScroll ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      <div ref={contentRef} className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose max-w-none">
              <p className="text-lg text-black">
                Hi, I'm Mac Walker, welcome to my personal website. I am currently pursuing an MPhil in Biotechnology at the University of Cambridge. Prior to this, I completed my Bachelor of Mathematics at the University of Edinburgh.
              </p>
              <p className="text-lg text-black mt-4">
                I believe things are <em>about to get very weird</em> - I am interested in making that go as well as possible. Specifically, how can we make emerging technologies best benefit society?
              </p>
            </div>
            <div className="border border-black p-6">
              <h3 className="text-xl font-semibold mb-4 text-black">Interests</h3>
              <ul className="space-y-2 text-black">
                <li className="flex items-center"><span className="mr-2">•</span>UK Policy</li>
                <li className="flex items-center"><span className="mr-2">•</span>AI for Biology</li>
                <li className="flex items-center"><span className="mr-2">•</span>AI Security</li>
                <li className="flex items-center"><span className="mr-2">•</span>Technology & Institutions</li>
                <li className="flex items-center"><span className="mr-2">•</span>Mathematics & Modelling</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">Recent Posts</h2>
          <div className="space-y-6">
            {getRecentPosts().map((post) => (
              <div key={post.id} className="p-6 bg-white border border-black">
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold text-black hover:underline">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-black mt-1">{post.publication}</p>
                <p className="mt-3 text-black">{post.summary}</p>
                <div className="mt-4">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-black hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <Link 
                to="/blog"
                className="inline-block px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">Contact</h2>
          <div className="bg-white p-6 border border-black">
            <p className="text-lg text-black mb-4">
              I always like to hear from people with similar interests! 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-black">Email</h3>
                <p className="text-black underline">macskyewalker[at]gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Mac Walker</p>
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/macwalker1/" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/macaswalker" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;