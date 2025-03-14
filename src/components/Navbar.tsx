
import React from 'react';
import { cn } from '@/lib/utils';
import { Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Home className="h-6 w-6 text-costa-blue mr-2" />
          <span className="text-costa-blue font-bold text-2xl">CostaHouses.com</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "text-gray-700 hover:text-costa-blue transition-colors duration-200",
        className
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;
