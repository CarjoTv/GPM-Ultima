import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../img/logo (2) (1).png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Seguro Médico', path: '/seguro-medico' },
    { name: 'Seguro de Auto', path: '/seguro-auto' },
    { name: 'Citas', path: '/citas' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-off-white/95 backdrop-blur-md shadow-sm py-2 md:py-3' : 'bg-off-white py-3 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="GPM - Grupo Patrimonial Mexicano" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  isActive(link.path) ? 'text-primary border-b-2 border-secondary' : 'text-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-lighter-navy hover:translate-y-[-1px] transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Phone className="h-4 w-4 text-secondary" />
              Llámanos
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-charcoal hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-off-white border-b border-beige overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.path) ? 'bg-beige text-primary' : 'text-charcoal hover:bg-beige'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full bg-primary text-white px-4 py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Hablar con un asesor
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}