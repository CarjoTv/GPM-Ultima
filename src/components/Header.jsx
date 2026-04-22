import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    { name: 'Seguro de Carro', path: '/seguro-carro' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors duration-300 shadow-lg shadow-primary/20">
                <Shield className="h-7 w-7 text-tertiary" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-tertiary rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-black tracking-tighter font-headline text-primary">
                GPM
              </span>
              <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-secondary">
                Grupo Patrimonial Mexicano
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-tertiary ${
                  isActive(link.path) ? 'text-primary border-b-2 border-tertiary' : 'text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-secondary hover:translate-y-[-1px] transition-all flex items-center gap-2 shadow-lg shadow-primary/10"
            >
              <Phone className="h-4 w-4 text-tertiary" />
              Llámanos
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
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