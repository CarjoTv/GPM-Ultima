import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../img/logo (2) (1).png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="GPM - Grupo Patrimonial Mexicano" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-off-white/70 leading-relaxed text-sm">
              Protegiendo su patrimonio y futuro con la excelencia y solidez que nos caracteriza como Grupo Patrimonial Mexicano.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 font-headline">Enlaces Rápidos</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/seguro-medico" className="hover:text-gold transition-colors">Seguro Médico</Link>
              </li>
              <li>
                <Link to="/seguro-auto" className="hover:text-gold transition-colors">Seguro de Auto</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-gold transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Nuestros Servicios</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Asistencia 24/7</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Seguros para Empresas</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Seguros de Vida</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Reclamaciones</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold shrink-0" />
                <span>Av. de la Libertad 123, Madrid, España</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span>info@segurosalianza.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/60">
          <p>© {currentYear} Grupo Patrimonial Mexicano (GPM). Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-gold transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}