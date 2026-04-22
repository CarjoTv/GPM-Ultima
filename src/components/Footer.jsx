import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-tertiary p-2 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-white tracking-tighter font-headline">
                  GPM
                </span>
                <span className="text-[7px] uppercase font-bold tracking-[0.2em] text-tertiary">
                  Grupo Patrimonial Mexicano
                </span>
              </div>
            </Link>
            <p className="text-secondary leading-relaxed text-sm">
              Protegiendo su patrimonio y futuro con la excelencia y solidez que nos caracteriza como Grupo Patrimonial Mexicano.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-tertiary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-tertiary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-tertiary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-tertiary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 font-headline">Enlaces Rápidos</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-tertiary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/seguro-medico" className="hover:text-tertiary transition-colors">Seguro Médico</Link>
              </li>
              <li>
                <Link to="/seguro-auto" className="hover:text-tertiary transition-colors">Seguro de Auto</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-tertiary transition-colors">Contacto</Link>
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
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Av. de la Libertad 123, Madrid, España</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>info@segurosalianza.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/60">
          <p>© {currentYear} Grupo Patrimonial Mexicano (GPM). Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-tertiary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-tertiary transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}