
import { useState } from 'react';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-display text-xl md:text-2xl text-white">TUSHAR <span className="text-solo-red">COSPLAY</span></span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">About</a>
            <a href="#gallery" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Gallery</a>
            <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/digitally__artistic_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:tusharkashyap877@gmail.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#gallery" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#services" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <div className="flex items-center gap-2 px-3 py-2">
              <a href="https://www.instagram.com/digitally__artistic_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:tusharkashyap877@gmail.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
