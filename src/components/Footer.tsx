
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-display text-xl text-white">TUSHAR <span className="text-solo-red">COSPLAY</span></span>
            <p className="text-gray-400 mt-2 text-sm">Professional Cosplayer & Prop Maker</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/digitally__artistic_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="mailto:tusharkashyap877@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tushar Cosplay. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
