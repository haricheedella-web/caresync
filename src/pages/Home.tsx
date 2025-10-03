import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Calendar,
  Star,
  Award,
  Clock,
  MessageCircle,
  Users,
  Shield,
  Heart,
} from 'lucide-react';
import CalendlyBooking from '../components/CalendlyBooking';
import SimpleMap from '../components/SimpleMap';


function Home() {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Family of 4",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&q=80",
      text: "CareSync helped us find the perfect family plan that saved us over $300 per month while providing better coverage.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80",
      text: "Their group health benefits consultation was invaluable. We now offer competitive healthcare to our 25 employees.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Individual Plan",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&q=80",
      text: "I highly recommend CareSync for its professionalism and guidance. They made healthcare simple to understand.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/src/components/doc.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              CareSync Dynamic
              <span className="block text-blue-400">Advisors</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Your trusted partner for health insurance solutions that prioritize savings and community well-being.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              
              <button 
                onClick={() => scrollToSection('consultation')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Book a Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center text-blue-400 mb-2">
                  <Users className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold text-white">10,000+</span>
                </div>
                <p className="text-gray-300 text-sm">Happy Members</p>
              </div>
              <div>
                <div className="flex items-center justify-center text-blue-400 mb-2">
                  <Shield className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold text-white">A+</span>
                </div>
                <p className="text-gray-300 text-sm">Rated Coverage</p>
              </div>
              <div>
                <div className="flex items-center justify-center text-blue-400 mb-2">
                  <Heart className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <p className="text-gray-300 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110">
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Health Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive health insurance solutions tailored to your unique needs and budget. Click to explore all services and view detailed documentation.
            </p>
          </div>

                 {/* Service Sections - 3 Separate Call-to-Action Sections */}
                 
                 {/* Health Insurance Plans Section */}
                 <div className="bg-blue-600 rounded-2xl p-8 mb-8 cursor-pointer hover:bg-blue-700 transition-all duration-300" onClick={() => { navigate('/services/health-insurance'); window.scrollTo(0, 0); }}>
                   <div className="flex items-center justify-between">
                     <div className="flex-1 pr-8">
                       <h3 className="text-3xl font-bold text-white mb-4">Health Insurance Plans</h3>
                       <p className="text-white text-lg mb-6">
                         Comprehensive health insurance options tailored to your needs and budget. Get coverage that fits your lifestyle.
                       </p>
                       <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                         <Calendar className="h-5 w-5 mr-2" />
                         View Health Plans
                       </button>
                     </div>
                     <div className="w-80 h-64">
                       <img 
                         src="/src/components/healthinsurance.png" 
                         alt="Health Insurance Plans" 
                         className="w-full h-full object-cover rounded-lg"
                       />
                     </div>
                   </div>
                 </div>

                 {/* Medicare Section */}
                 <div className="bg-green-600 rounded-2xl p-8 mb-8 cursor-pointer hover:bg-green-700 transition-all duration-300" onClick={() => { navigate('/services/medicare-consultation'); window.scrollTo(0, 0); }}>
                   <div className="flex items-center justify-between">
                     <div className="flex-1 pr-8">
                       <h3 className="text-3xl font-bold text-white mb-4">Medicare</h3>
                       <p className="text-white text-lg mb-6">
                         Expert guidance for Medicare enrollment and plan selection.
                       </p>
                       <div className="flex flex-col sm:flex-row gap-3">
                         <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                           <Calendar className="h-5 w-5 mr-2" />
                           Free Medicare Consultation
                         </button>
                         <button 
                           onClick={() => window.open('https://eosadvisor.com/advisor/ADS1759248256194259/public', '_blank', 'noopener,noreferrer')}
                           className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                         >
                           Get Started
                         </button>
                       </div>
                     </div>
                     <div className="w-80 h-64">
                       <img 
                         src="/src/components/medicare.jpg" 
                         alt="Medicare Consultation" 
                         className="w-full h-full object-cover rounded-lg"
                       />
                     </div>
                   </div>
                 </div>

                 {/* Membership Health Plans Section */}
                 <div className="bg-purple-600 rounded-2xl p-8 mb-8 cursor-pointer hover:bg-purple-700 transition-all duration-300" onClick={() => { navigate('/membership-health-plans'); window.scrollTo(0, 0); }}>
                   <div className="flex items-center justify-between">
                     <div className="flex-1 pr-8">
                       <h3 className="text-3xl font-bold text-white mb-4">Membership Health Plans</h3>
                       <p className="text-white text-lg mb-6">
                         Comprehensive membership-based health plans with flexible coverage options and member benefits.
                       </p>
                       <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                         <Calendar className="h-5 w-5 mr-2" />
                         Explore Membership Plans
                       </button>
                     </div>
                     <div className="w-80 h-64">
                       <img 
                         src="/src/components/healthcircle.jpg" 
                         alt="Membership Health Plans" 
                         className="w-full h-full object-cover rounded-lg"
                       />
                     </div>
                   </div>
                 </div>

          {/* View All Services Button */}
          <div className="text-center mb-12">
            <button
              onClick={handleServiceClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              View All Services & Documents
            </button>
          </div>

          {/* Featured Service */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Schedule a free consultation with our health insurance experts to find the perfect plan for your needs.
                </p>
                <CalendlyBooking 
                  buttonText="Book Free Consultation"
                  buttonClassName="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
                />
              </div>
              <div className="relative">
                <img 
                  src="/src/components/ready.jpg" 
                  alt="Healthcare consultation" 
                  className="rounded-xl shadow-xl w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&crop=center&q=80" 
                alt="Healthcare team" 
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Vision and Commitment to Health
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CareSyncDynamicAdvisors was founded with a passion for empowering individuals and communities through informed healthcare choices. Our journey began with the belief that everyone deserves access to reliable health plans that promote not only financial well-being but also life quality. We stand for transparency and dedication in guiding you through the complexities of health insurance.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <CheckCircle className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book Your Consultation Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule your appointment to get personalized health insurance advice tailored to your needs.
            </p>
            <CalendlyBooking 
              buttonText="Book now"
              buttonClassName="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What our customers are saying
          </h2>
          <div className="text-6xl text-gray-300 mb-8">"</div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={testimonials[activeTestimonial].image} 
                alt={testimonials[activeTestimonial].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
              />
            </div>
            
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-lg text-gray-700 mb-6 italic">
              "{testimonials[activeTestimonial].text}"
            </p>
            
            <div>
              <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</div>
              <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
            </div>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for health tips, industry updates, and exclusive offers delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address*"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We're here to help you find the perfect healthcare solution.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <a 
              href="tel:+18037286698" 
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:text-blue-700 transition-colors" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (803) 728-6698</p>
            </a>
            
            <a 
              href="mailto:caresyncdynamicadvisors@gmail.com" 
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:text-blue-700 transition-colors" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">caresyncdynamicadvisors<br/>@gmail.com</p>
            </a>
            
            <a 
              href="https://maps.google.com/?q=3020+Sunset+Blvd,+West+Columbia,+SC+29169" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:text-blue-700 transition-colors" />
              <h3 className="font-semibold text-gray-900 mb-2">Locations</h3>
              <p className="text-gray-600">West Columbia, SC 29169<br />Charlotte, NC 28273</p>
            </a>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9 am to 6 pm<br />Sat: 9 am to 2 pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">We serve clients from multiple locations across South Carolina and North Carolina</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* West Columbia Location */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">West Columbia, SC</h3>
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <p className="text-lg text-gray-700">3020 Sunset Blvd, West Columbia, SC 29169, USA</p>
              </div>
              
              {/* Interactive Map */}
              <SimpleMap 
                latitude={34.00700167157646}
                longitude={-81.12151069999999}
                address="3020 Sunset Blvd, West Columbia, SC 29169, USA"
                businessName="CareSync Dynamic Advisors - West Columbia"
                height="300px"
              />
            </div>

            {/* Charlotte Location */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Charlotte, NC</h3>
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <p className="text-lg text-gray-700">Charlotte, NC 28273, USA</p>
              </div>
              
              {/* Interactive Map */}
              <SimpleMap 
                latitude={35.2271}
                longitude={-80.8431}
                address="Charlotte, NC 28273, USA"
                businessName="CareSync Dynamic Advisors - Charlotte"
                height="300px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;