"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "/", label: "Início" },
    { href: "/iscas", label: "Iscas" },
    { href: "/equipamentos", label: "Equipamentos" },
    { href: "/peixes", label: "Peixes" },
    { href: "/forum", label: "Fórum" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <nav className="bg-blue-800 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">Site de Pesca</div>
      <button
        className="md:hidden block"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul
        className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} absolute md:static top-full left-0 w-full bg-blue-800 md:w-auto`}
      >
        {links.map((link) => (
          <li key={link.href} className="p-2">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
