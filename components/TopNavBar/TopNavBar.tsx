"use client"
import iksLogo from "@/public/logo/infinikey-logo-dark.png"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Facebook from "@/public/logo/facebook.png"
import IG from "@/public/logo/instagram.png"
import Linkedin from "@/public/logo/linkedin.png"

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  return (
    <nav className="poppins-font flex justify-between items-center font-medium border-b-2 border-grey bg-white z-10 sticky top-0">
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
        <Link className="hover:text-blue-600" href="/">Home</Link>

        <div className="relative group">
          <Link href="/services" className="group-hover:text-blue-600">
            Services
          </Link>
          <div className="absolute left-0 hidden group-hover:block hover:block bg-white shadow-lg rounded w-[250px]">
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

        <Link className="hover:text-blue-600" href="/blogs">Blogs</Link>
        <Link className="hover:text-blue-600" href="/case-studies">Case Studies</Link>

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
        className={`fixed top-0 left-0 p-4 h-full w-96 bg-white text-gray-700 shadow-lg z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-1">
          <Image className="w-32" src={iksLogo} alt="" />
          <button className="text-3xl" onClick={() => setIsMobileMenuOpen(false)}>
            &times;
          </button>
        </div>
        <div className="flex flex-col items-start px-4 space-y-2">
          <Link className="text-xl font-semibold" href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          {/* Services Dropdown */}
          <div>
            <button className="flex items-center w-full" onClick={() => setIsServicesOpen(!isServicesOpen)}>
              <span className="text-xl font-semibold" >Services</span>
              <svg className={`ml-7 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
              <Link href="/services/management-consulting" className="block mt-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Management consulting</Link>
              <Link href="/services/policies-and-procedure" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Policies & Procedures</Link>
              <Link href="/services/custom-software-solution" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Custom Software Solutions</Link>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div>
            <button className="flex items-center w-full" onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}>
              <span className="text-xl font-semibold">Industries</span>
              <svg className={`ml-3 w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isIndustriesOpen ? 'max-h-96' : 'max-h-0'}`}>
              <Link href="/industries/beauty-and-aesthetic" className="block mt-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Beauty and Aesthetics</Link>
              <Link href="/industries/hospitality-and-tourism" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Hospitality</Link>
              <Link href="/industries/health-and-community-service" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Health and Community Services</Link>
              <Link href="/industries/retail" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Retail</Link>
              <Link href="/industries/technology" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Technology</Link>
            </div>
          </div>

          <Link className="text-xl font-semibold" href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
          <Link className="text-xl font-semibold" href="/case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>

          {/* About Us Dropdown */}
          <div>
            <button className="flex items-center w-full" onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}>
              <span className="text-xl font-semibold">About Us</span>
              <svg className={`ml-6 w-4 h-4 transition-transform ${isAboutUsOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isAboutUsOpen ? 'max-h-96' : 'max-h-0'}`}>
              <Link href="/about-us" className="block mt-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>- About Us</Link>
              <Link href="/our-team" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Our Team</Link>
              <Link href="/testimonials" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>- Testimonials</Link>
            </div>
          </div>
        </div>
        <div className="w-full text-black p-4 text-base">
          <div className="mb-5 mt-5">
            <div className="text-xl">Location</div>
            <a href="https://goo.gl/maps/XfcxXc8ttaiMrEcm7">
              <div>Level 14, 32 Smith Street</div>
              <div>Parramatta NSW 2150</div>
            </a>
          </div>
          <div className="mb-5">
            <div className="text-xl">Phone</div>
            <div>02 9139 8874</div>
          </div>
          <div className="mb-5">
            <div className="text-xl">Email</div>
            <div>info@infinikeysolutions.com.au</div>
          </div>
          <div className="flex w-40 justify-between my-8">
            <a className="w-12" href="https://www.facebook.com/infnikeysolutions">
              <Image src={Facebook} alt="facebook logo" />
            </a>
            <a className="w-12" href="https://www.instagram.com/infinikeysolutions/">
              <Image src={IG} alt="facebook logo" />
            </a>
            <a className="w-12" href="https://www.linkedin.com/company/infinikey-solutions/">
              <Image src={Linkedin} alt="facebook logo" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
