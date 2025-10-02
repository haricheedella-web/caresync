import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  ChevronDown,
  Stethoscope,
} from 'lucide-react';

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

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleNavigation = (id: string, hasDropdown?: boolean) => {
    if (id === 'membership-plans') {
      navigate('/membership-plans');
      setMobileMenuOpen(false);
    } else {
      scrollToSection(id);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Health Insurance Plans', id: 'health-insurance' },
    { label: 'Group Health Benefits', id: 'group-benefits' },
    { label: 'Membership Health Plans', id: 'membership-plans' },
    { label: 'Original Remedies and Cures', id: 'remedies' },
    { label: 'Medicare', id: 'medicare' },
    { label: 'Shop Medical Services and Products', id: 'shop' },
    { label: 'Resource Directory', id: 'resources', hasDropdown: true },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Subscribe', id: 'subscribe' },
    { label: 'Events Calendar', id: 'events' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900 shadow-lg' : 'bg-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Stethoscope className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">CareSync Advisors</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-6 items-center">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleNavigation(item.id, item.hasDropdown)}
                      className="text-gray-200 hover:text-blue-400 transition-colors text-sm font-medium flex items-center"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="text-gray-200 hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side - Social & Call Button */}
            <div className="hidden xl:flex items-center space-x-4">
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <a
                href="tel:1-800-555-CARE"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors font-medium"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left text-gray-200 hover:text-blue-400 transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:1-800-555-CARE"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center transition-colors mt-4"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
