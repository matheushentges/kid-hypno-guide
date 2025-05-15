import React from 'react';
import { Shield } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-brand-blue mr-2" />
          <span className="font-poppins font-semibold text-lg md:text-xl text-brand-blue">Hipnoterapia Infantil</span>
        </div>
        <div>
          <a 
            href="#comprar" 
            className="hidden md:inline-block text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-300"
            style={{ backgroundColor: '#3ab895', borderColor: '#3ab895' }}
          >
            Garantir Acesso
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
