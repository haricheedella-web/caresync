import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ShoppingCart,
  Calendar as CalendarIcon,
  Heart,
  Shield,
  Users,
  Stethoscope,
  FileText,
  ArrowRight,
} from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
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
  };

  const healthPlans = [
    {
      title: 'Individual Health Insurance',
      description: 'Comprehensive coverage tailored to your personal needs with flexible deductibles and nationwide networks.',
      icon: Heart,
      features: ['Preventive care', 'Emergency services', 'Prescription coverage'],
    },
    {
      title: 'Family Health Insurance',
      description: 'Protect your entire family with comprehensive plans designed for all ages and life stages.',
      icon: Users,
      features: ['Pediatric care', 'Maternity coverage', 'Family deductible'],
    },
    {
      title: 'Short-Term Health Plans',
      description: 'Temporary coverage to bridge gaps between major medical plans or life transitions.',
      icon: Shield,
      features: ['Quick enrollment', 'Affordable premiums', 'Essential coverage'],
    },
  ];

  const membershipPlans = [
    {
      name: 'Basic Care',
      price: '$49',
      period: 'per month',
      features: [
        'Telemedicine consultations',
        'Prescription discounts up to 80%',
        'Wellness programs',
        '24/7 nurse hotline',
        'Preventive care guidance',
      ],
    },
    {
      name: 'Premium Care',
      price: '$99',
      period: 'per month',
      features: [
        'All Basic Care features',
        'Specialist consultations',
        'Mental health support',
        'Nutrition counseling',
        'Lab test discounts',
        'Fitness program access',
      ],
      popular: true,
    },
    {
      name: 'Family Care',
      price: '$179',
      period: 'per month',
      features: [
        'All Premium Care features',
        'Coverage for up to 6 family members',
        'Pediatric specialists',
        'Family wellness programs',
        'Dental and vision discounts',
        'Priority scheduling',
      ],
    },
  ];

  const medicareOptions = [
    {
      title: 'Medicare Advantage (Part C)',
      description: 'All-in-one alternative to Original Medicare with additional benefits.',
      details: ['Includes Part A and Part B', 'Often includes Part D', 'Additional benefits like dental and vision'],
    },
    {
      title: 'Medicare Supplement (Medigap)',
      description: 'Helps pay some of the healthcare costs that Original Medicare doesn\'t cover.',
      details: ['Standardized plans', 'Predictable costs', 'Freedom to choose providers'],
    },
    {
      title: 'Medicare Part D',
      description: 'Prescription drug coverage to help lower prescription costs.',
      details: ['Variety of plan options', 'Coverage for most medications', 'Affordable premiums'],
    },
  ];

  const products = [
    {
      name: 'Home Blood Pressure Monitor',
      price: '$49.99',
      image: 'https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Pulse Oximeter',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'First Aid Kit',
      price: '$39.99',
      image: 'https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Digital Thermometer',
      price: '$19.99',
      image: 'https://images.pexels.com/photos/7108316/pexels-photo-7108316.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Wellness Supplement Pack',
      price: '$59.99',
      image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Fitness Tracker',
      price: '$79.99',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const events = [
    { date: 5, title: 'Medicare Information Session', time: '2:00 PM' },
    { date: 12, title: 'Health & Wellness Expo', time: '10:00 AM' },
    { date: 18, title: 'Open Enrollment Webinar', time: '6:00 PM' },
    { date: 25, title: 'Family Health Planning Workshop', time: '1:00 PM' },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);

  const changeMonth = (direction: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              CareSync Advisors
            </h1>
            <p className="text-3xl md:text-4xl text-blue-300 mb-4 font-semibold">
              Smarter Health, Flexible Coverage
            </p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate healthcare with confidence. We deliver trusted advice, meaningful savings, and
              a supportive community dedicated to your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('health-insurance')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
              >
                Compare Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
              >
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Insurance Plans */}
      <section id="health-insurance" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Health Insurance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a variety of comprehensive health insurance options designed to fit your lifestyle and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {healthPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <plan.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Health Benefits */}
      <section id="group-benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Group Health Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your team with comprehensive group health plans that attract and retain top talent.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Small Business</th>
                  <th className="px-6 py-4 text-center font-semibold">Mid-Size Business</th>
                  <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Employee Count</td>
                  <td className="px-6 py-4 text-center text-gray-600">2-50</td>
                  <td className="px-6 py-4 text-center text-gray-600">51-500</td>
                  <td className="px-6 py-4 text-center text-gray-600">500+</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Medical Coverage</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Dental & Vision</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Life Insurance</td>
                  <td className="px-6 py-4 text-center text-gray-400">Optional</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">HSA/FSA Options</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Wellness Programs</td>
                  <td className="px-6 py-4 text-center text-gray-400">Basic</td>
                  <td className="px-6 py-4 text-center text-gray-600">Enhanced</td>
                  <td className="px-6 py-4 text-center text-gray-600">Premium</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Dedicated Support</td>
                  <td className="px-6 py-4 text-center text-gray-400">Email</td>
                  <td className="px-6 py-4 text-center text-gray-600">Phone & Email</td>
                  <td className="px-6 py-4 text-center text-gray-600">24/7 Dedicated Rep</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Group Quote
            </button>
          </div>
        </div>
      </section>

      {/* Membership Health Plans */}
      <section id="membership-plans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Membership Health Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable monthly memberships with comprehensive healthcare services and exclusive benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 transition-all transform hover:-translate-y-2 relative ${
                  plan.popular ? 'border-4 border-blue-500 scale-105' : 'border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/membership-plans')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              View All Plans & Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Original Remedies and Cures */}
      <section id="remedies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Original Remedies and Cures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover evidence-based natural remedies and holistic approaches to common health concerns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Natural Sleep Solutions',
                excerpt: 'Explore proven herbal remedies and lifestyle adjustments for better sleep quality without medication.',
                image: 'https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Immune System Boosters',
                excerpt: 'Learn about natural ways to strengthen your immune system through nutrition and supplementation.',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Stress Relief Techniques',
                excerpt: 'Master mindfulness, meditation, and breathing exercises to manage stress and anxiety naturally.',
                image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Digestive Health Guide',
                excerpt: 'Understand probiotics, digestive enzymes, and dietary strategies for optimal gut health.',
                image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Joint Pain Management',
                excerpt: 'Discover anti-inflammatory foods, supplements, and exercises to reduce joint discomfort.',
                image: 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Heart Health Naturally',
                excerpt: 'Learn about cardiovascular-supporting nutrients, exercise routines, and lifestyle modifications.',
                image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicare */}
      <section id="medicare" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Medicare Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate Medicare with confidence. We help you find the right coverage for your needs.
            </p>
          </div>
          <div className="space-y-6">
            {medicareOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setSelectedPlan(selectedPlan === option.title ? null : option.title)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                  <ChevronRight
                    className={`h-6 w-6 text-gray-400 transition-transform ${
                      selectedPlan === option.title ? 'transform rotate-90' : ''
                    }`}
                  />
                </button>
                {selectedPlan === option.title && (
                  <div className="px-8 py-6 bg-blue-50 border-t border-gray-200">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {option.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Get More Information
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Medical Services and Products */}
      <section id="shop" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Shop Medical Services and Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality medical supplies and wellness products delivered to your door.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Directory */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Resource Directory</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access helpful guides, tools, and resources to make informed healthcare decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Healthcare Glossary',
                description: 'Understand common medical and insurance terms',
                icon: FileText,
              },
              {
                title: 'Coverage Calculator',
                description: 'Estimate your healthcare costs and coverage needs',
                icon: FileText,
              },
              {
                title: 'Provider Network',
                description: 'Search for in-network doctors and facilities',
                icon: FileText,
              },
              {
                title: 'Prescription Drug Guide',
                description: 'Find information about medications and costs',
                icon: FileText,
              },
              {
                title: 'Wellness Resources',
                description: 'Access health tips, recipes, and fitness plans',
                icon: FileText,
              },
              {
                title: 'FAQs',
                description: 'Get answers to common healthcare questions',
                icon: FileText,
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all flex items-start space-x-4"
              >
                <div className="bg-blue-100 p-3 rounded-lg">
                  <resource.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-3">{resource.description}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Access Resource
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Our team of healthcare advisors is here to help.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">1-800-555-CARE (2273)</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am-8pm EST</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">support@caresyncadvisors.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Healthcare Plaza, Suite 400</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
              <a
                href="tel:1-800-555-2273"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold transition-colors text-center flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now to Speak with an Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Stay Informed</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for health tips, industry updates, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Events Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for educational workshops, webinars, and community health events.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => changeMonth(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <h3 className="text-2xl font-bold text-slate-900">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <button
                onClick={() => changeMonth(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: firstDay }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square"></div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const event = events.find((e) => e.date === day);
                return (
                  <div
                    key={day}
                    className={`aspect-square p-2 border rounded-lg ${
                      event
                        ? 'bg-blue-50 border-blue-300 hover:bg-blue-100'
                        : 'border-gray-200 hover:bg-gray-50'
                    } transition-colors cursor-pointer relative group`}
                  >
                    <span className="text-sm font-medium text-gray-900">{day}</span>
                    {event && (
                      <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                        <div className="bg-slate-900 text-white text-xs rounded-lg p-3 whitespace-nowrap shadow-lg">
                          <div className="font-semibold mb-1">{event.title}</div>
                          <div className="text-gray-300">{event.time}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-slate-900 mb-4">Upcoming Events</h4>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-500 text-white rounded-lg p-3 text-center min-w-[60px]">
                      <div className="text-2xl font-bold">{event.date}</div>
                      <div className="text-xs">
                        {currentMonth.toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-slate-900">{event.title}</h5>
                      <p className="text-sm text-gray-600 mt-1">
                        <CalendarIcon className="inline h-4 w-4 mr-1" />
                        {event.time}
                      </p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      Register
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Stethoscope className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold text-white">CareSync Advisors</span>
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
                    onClick={() => scrollToSection('health-insurance')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Health Insurance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('medicare')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Medicare
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/membership-plans')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Membership Plans
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('resources')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Resource Directory
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('remedies')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Remedies & Cures
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('events')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Events Calendar
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              <p className="text-sm text-gray-400">1-800-555-CARE (2273)</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                <strong>Disclaimer:</strong> CareSync Advisors is a healthcare advisory service. We are
                licensed insurance agents representing multiple insurance carriers. The information provided
                on this website is for informational purposes only and does not constitute medical advice.
              </p>
              <p>
                Insurance products and their terms are subject to underwriting approval and availability.
                Not all plans are available in all areas. Benefits, formularies, pharmacy networks, provider
                networks, premium and co-payments/co-insurance may change on January 1 of each year.
              </p>
              <p className="pt-4 text-center">
                © {new Date().getFullYear()} CareSync Advisors. All rights reserved. | Privacy Policy | Terms
                of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
