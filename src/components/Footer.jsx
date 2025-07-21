import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <section className="w-full bg-[var(--color-black)] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Organization Name */}
          <div className="xl:col-span-2 flex flex-col items-center md:items-start">
            <img src={logo} alt="logo" className="w-[125px] h-[44px] mb-4" />
            <div className="text-white font-bold text-center md:text-left leading-tight">
              Sanvi Seva Mahila Jan Seva Sansthan
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 xl:col-span-2">
            {/* Home Section */}
            <div className="flex flex-col text-white gap-3">
              <Link
                to="/"
                className="font-bold text-lg mb-1 hover:text-gray-300"
              >
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
              <Link to="/whatwedo" className="hover:text-gray-300">
                What We Do
              </Link>
              <Link to="/team" className="hover:text-gray-300">
                Contact
              </Link>
              <div className=" md:hidden mt-12 pt-8 border-t border-gray-700"></div>
            </div>

            {/* Projects Section */}
            <div className="flex flex-col text-white gap-3">
              <Link
                to="/projects"
                className="font-bold text-lg mb-1 hover:text-gray-300"
              >
                Projects
              </Link>
              <Link to="/events" className="hover:text-gray-300">
                Events
              </Link>
              <Link to="/donate" className="hover:text-gray-300">
                Donate
              </Link>
              <Link to="/blog" className="hover:text-gray-300">
                Blog
              </Link>
              <div className="md:hidden mt-12 pt-8 border-t border-gray-700"></div>
            </div>

            {/* Connect Section */}
            <div className="flex flex-col text-white gap-3">
              <div className="font-bold text-lg mb-1">Connect</div>
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="xl:col-span-1">
            <div className="text-white">
              <h3 className="font-bold text-xl mb-4">
                Subscribe for more updates
              </h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="flex-1 px-3 py-3 rounded border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border/Copyright  */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-400 text-sm flex justify-between md:flex-row sm:flex-col">
            <div className="">
              Made with 💓 by{" "}
              <a
                href="https://github.com/pseud039/mystic"
                className="decoration-none"
              >
                pseudo
              </a>
            </div>
            <div className="">
              © 2023 Sanvi Seva Mahila Jan Seva Sansthan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
