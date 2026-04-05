'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${isScrolled ? 'fixed top-0 left-0 w-full z-50 bg-black/80' : 'absolute top-0 left-0 w-full z-50'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
       <div className="flex items-center space-x-3 px-6">
 
  <Image
    src="/logo.png" // Path to your logo in public folder
    alt="Inovetta Fitness Logo"
    width={40} // adjust size
    height={40} // adjust size
    className="object-contain"
  />

 
  <Link href="/" className="text-xl font-bold text-yellow-400 tracking-widest">
    INOVETTA FITNESS
  </Link>
</div>

        <button
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
          </div>
        </button>

        <div
          className={`${isOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:space-x-6 bg-black/80 md:bg-transparent w-full md:w-auto absolute md:relative top-16 left-0 md:top-0 md:left-0 md:z-auto text-white`}
        >
          <Link href="/" className="block py-2 px-4 hover:text-yellow-500" onClick={closeMenu}>
            Welcome
          </Link>
          <Link href="#about" className="block py-2 px-4 hover:text-yellow-500" onClick={closeMenu}>
            About
          </Link>
          <Link href="#schedule" className="block py-2 px-4 hover:text-yellow-500" onClick={closeMenu}>
            Program
          </Link>
          <Link href="#pricing" className="block py-2 px-4 hover:text-yellow-500" onClick={closeMenu}>
            Prices
          </Link>
          <Link href="#contact" className="block py-2 px-4 hover:text-yellow-500" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/downloadApp" className="block py-2 px-4 hover:text-yellow-500" onClick={closeMenu}>
            Download App
          </Link>
        </div>
      </div>
    </nav>
  );
}
