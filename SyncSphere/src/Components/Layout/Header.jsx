import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/connect", label: "Connect" },
    { id: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-lg border-b border-white/10"
          : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between text-neutral-300">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            SyncSphere
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className={`hover:text-purple-300 transition-colors ${
                location.pathname === item.id
                  ? "text-purple-300 font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <select
            value={location.pathname}
            onChange={(e) => (window.location.href = e.target.value)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white"
          >
            {navigationItems.map((item) => (
              <option key={item.id} value={item.id} className="bg-gray-800">
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
};
