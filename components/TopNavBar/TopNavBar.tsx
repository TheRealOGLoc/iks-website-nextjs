"use client"
import iksLogo from "@/public/logo/infinikey-logo-dark.png"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="poppins-font flex justify-between items-center font-medium border-b-2 border-grey bg-white z-30 sticky top-0">
      {/* Mobile Menu Button */}
      <div className="flex md:hidden mx-10">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Logo Section */}
      <Link className="w-[100px] mx-auto md:mx-20" href="/">
        <Image src={iksLogo} alt="Infinikey Solutions Logo" />
      </Link>

      {/* Placeholder Section for Mobile */}
      <div className="w-[100px] md:hidden" />

      {/* Desktop Menu Section */}
      <div className="hidden md:flex justify-between items-center space-x-6 mx-10">
        <Link href="/">Home</Link>

        <div className="relative group">
          <Link href="/services" className="group-hover:text-blue-600">
            Services
          </Link>
          <div className="absolute left-[] hidden group-hover:block hover:block bg-white shadow-lg rounded w-[250px]">
            <Link href="/services/management-consulting" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Management consulting</Link>
            <Link href="/services/policies-and-procedure" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Policies & Procedures</Link>
            <Link href="/services/custom-software-solution" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Custom Software Solutions</Link>
          </div>
        </div>

        <div className="relative group">
          <Link href="/industries" className="group-hover:text-blue-600">
            Industries
          </Link>
          <div className="absolute hidden group-hover:block hover:block bg-white w-[220px] shadow-lg rounded">
            <Link href="/industries/beauty-and-aesthetic" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Beauty and Aesthetics</Link>
            <Link href="/industries/hospitality-and-tourism" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Hospitality</Link>
            <Link href="/industries/health-and-community-service" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Health and Community Services</Link>
            <Link href="/industries/retail" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Retail</Link>
            <Link href="/industries/technology" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Technology</Link>
          </div>
        </div>

        <Link href="/blogs">Blogs</Link>
        <Link href="/case-studies">Case Studies</Link>

        <div className="relative group">
          <Link href="/about-us" className="group-hover:text-blue-600">
            About Us
          </Link>
          <div className="absolute text-right left-[-45px] hidden group-hover:block hover:block bg-white shadow-lg rounded">
            <Link href="/about-us" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">About Us</Link>
            <Link href="/our-team" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Our Team</Link>
            <Link href="/testimonials" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition">Testimonials</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Section */}
      <div
        className={`fixed top-0 left-0 h-full w-76 bg-white shadow-lg z-50 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            className="text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-start p-4 space-y-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>

          <div className="relative">
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <div className="flex flex-col space-y-2 ml-2">
              <Link href="/services/management-consulting" className="block mt-2 hover:bg-gray-100">- Management consulting</Link>
              <Link href="/services/policies-and-procedure" className="block hover:bg-gray-100">- Policies & Procedures</Link>
              <Link href="/services/custom-software-solution" className="block hover:bg-gray-100">- Custom Software Solutions</Link>
            </div>
          </div>

          <div className="relative">
            <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)}>
              Industries
            </Link>
            <div className="flex flex-col space-y-2 ml-2">
              <Link href="/industries/beauty-and-aesthetic" className="block mt-2 hover:bg-gray-100">- Beauty and Aesthetics</Link>
              <Link href="/industries/hospitality-and-tourism" className="block hover:bg-gray-100">- Hospitality</Link>
              <Link href="/industries/health-and-community-service" className="block hover:bg-gray-100">- Health and Community Services</Link>
              <Link href="/industries/retail" className="block hover:bg-gray-100">- Retail</Link>
              <Link href="/industries/technology" className="block hover:bg-gray-100">- Technology</Link>
            </div>
          </div>

          <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
            Blogs
          </Link>
          <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)}>
            Case Studies
          </Link>

          <div className="relative">
            <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <div className="flex flex-col space-y-2 ml-2">
              <Link href="/about-us" className="block mt-2 hover:bg-gray-100">- About Us</Link>
              <Link href="/our-team" className="block hover:bg-gray-100">- Our Team</Link>
              <Link href="/testimonials" className="block hover:bg-gray-100">- Testimonials</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
