import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Stethoscope,
} from 'lucide-react';
import { images } from '../utils/imageUtils';

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(`/${id}`);
    } else if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About us', id: 'about' },
    { label: 'Membership Health Plans', id: 'membership-health-plans', isRoute: true },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Work', id: 'work' },
    { label: 'Book a service', id: 'consultation' },
    { label: 'Contact', id: 'contact' },
    { label: 'Explore', id: 'explore' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src={images.logo()} 
                alt="CareSync Logo" 
                className="h-12 w-12 mr-3 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">CareSync Dynamic Advisors</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.isRoute)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.isRoute)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src={images.logo()} 
                  alt="CareSync Logo" 
                  className="h-12 w-12 mr-3 object-contain"
                />
                <span className="text-xl font-bold text-white">CareSync Dynamic Advisors</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner in navigating healthcare with confidence and care.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Health Insurance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('consultation')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Book Consultation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">+1 (803) 728-6698</p>
                <p className="text-gray-400">caresyncdynamicadvisors@gmail.com</p>
                <p className="text-gray-400">
                  3020 Sunset Blvd<br />
                  West Columbia, SC 29169<br />
                  Charlotte, NC 28273
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="text-sm text-gray-400 text-center">
              <p>© {new Date().getFullYear()} CareSync Dynamic Advisors. All rights reserved.</p>
              <p className="mt-2">
                <strong>Disclaimer:</strong> CareSync Dynamic Advisors is a healthcare advisory service. 
                We are licensed insurance agents representing multiple insurance carriers.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;