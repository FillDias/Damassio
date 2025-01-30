"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#E6E6E6] shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Damassio Logo"
                width={60}
                height={20}
                className="w-10 h-auto md:w-12 lg:w-14"
              />
            </Link>
          </div>

          {/* Menu para desktop/tablet */}
          <div className="hidden md:flex space-x-16"> {/* Aumentei o espaçamento para space-x-16*/}
            <a href="#inicio" className="text-gray-800 hover:text-gray-600">
              Início
            </a>
            <a href="#linha" className="text-gray-800 hover:text-gray-600">
              Linha
            </a>
            <Link href="/contato" className="text-gray-800 hover:text-gray-600">
              Contato
            </Link>
            <a href="#onde-comprar" className="text-gray-800 hover:text-gray-600">
              Onde Comprar
            </a>
          </div>

          {/* Botão de menu para mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
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
        </div>

        {/* Menu para mobile (oculto por padrão) */}
        <div className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#inicio" className="block text-gray-800 hover:text-gray-600 py-2">
            Início
          </a>
          <a href="#linha" className="block text-gray-800 hover:text-gray-600 py-2">
            Linha
          </a>
          <Link href="/contato" className="block text-gray-800 hover:text-gray-600 py-2">
            Contato
          </Link>
          <a href="#onde-comprar" className="block text-gray-800 hover:text-gray-600 py-2">
            Onde Comprar
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;