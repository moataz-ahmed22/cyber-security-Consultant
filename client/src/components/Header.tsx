import { useState, useEffect, FC } from 'react';
import { Menu, X, Shield, Mail, MapPin, Phone } from 'lucide-react';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-green-500/20' : 'bg-transparent'
    }`}>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-green-400 py-2 px-4 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex items-center space-x-1 md:space-x-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+44 7366 187685</span>
              <span className="sm:hidden">Call</span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden md:inline">moataz.yones244@gmail.com</span>
              <span className="md:hidden">Email</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <MapPin className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden md:inline">Available Worldwide | Arabic & English</span>
            <span className="md:hidden">Global</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold font-mono ${isScrolled ? 'text-white' : 'text-white'}`}>
              <span className="text-red-400">Moataz</span> <span className="text-green-400">Younes</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a href="#home" className={`hover:text-green-400 transition-colors font-medium text-sm xl:text-base ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>Home</a>
            <a href="#about" className={`hover:text-green-400 transition-colors font-medium text-sm xl:text-base ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>About</a>
            <a href="#services" className={`hover:text-green-400 transition-colors font-medium text-sm xl:text-base ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>Services</a>
            <a href="#portfolio" className={`hover:text-green-400 transition-colors font-medium text-sm xl:text-base ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>Portfolio</a>
            <a href="#contact" className={`hover:text-green-400 transition-colors font-medium text-sm xl:text-base ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>Contact</a>
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSePjBveQYC8IcYr0uCCuuo_Ue3kI4tVdUienhljFJHEBskU0Q/viewform', '_blank')}
              className="bg-gradient-to-r from-red-500 to-green-500 text-white px-4 py-2 xl:px-6 xl:py-3 rounded-lg hover:from-red-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-xs xl:text-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <span className="relative z-10">Schedule Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md shadow-xl py-6 border-b border-red-500/30 z-50">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#home" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-gray-700/50" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-gray-700/50" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-gray-700/50" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-gray-700/50" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-gray-700/50" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button 
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSePjBveQYC8IcYr0uCCuuo_Ue3kI4tVdUienhljFJHEBskU0Q/viewform', '_blank');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-red-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-green-600 transition-all duration-300 w-full font-medium mt-4 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <span className="relative z-10">Schedule Consultation</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;