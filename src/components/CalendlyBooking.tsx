import { useState, useEffect } from 'react';
import { Calendar, X, Clock, User, Mail } from 'lucide-react';

interface CalendlyBookingProps {
  url?: string;
  buttonText?: string;
  buttonClassName?: string;
  prefill?: {
    name?: string;
    email?: string;
  };
}

function CalendlyBooking({ 
  url = "https://calendly.com/hari-p-cheedella/new-meeting", // Default Calendly URL
  buttonText = "Book Now",
  buttonClassName = "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",
  prefill = {}
}: CalendlyBookingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      setIsCalendlyLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openCalendly = () => {
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openCalendly}
        className={`${buttonClassName} flex items-center justify-center`}
      >
        <Calendar className="h-5 w-5 mr-2" />
        {buttonText}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={closeCalendly}
          />
          
          {/* Booking Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-full max-h-[90vh] relative overflow-hidden flex flex-col">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: "url('/src/components/book-doctor-appointment.jpg')"
                }}
              />
              
              {/* Close Button */}
              <button
                onClick={closeCalendly}
                className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              
              {/* Header */}
              <div className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Schedule Your Consultation</h2>
                    <p className="text-blue-100">Book a time that works for you</p>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 relative z-10 p-6 overflow-y-auto">
                {isCalendlyLoaded ? (
                  <div className="h-full">
                    <div 
                      className="calendly-inline-widget w-full h-full" 
                      data-url={url}
                      style={{ minWidth: '320px', height: '600px' }}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="mb-8">
                      <img 
                        src="/src/components/book-doctor-appointment.jpg" 
                        alt="Book Doctor Appointment" 
                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                      />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                      <p className="text-gray-600 mb-6 max-w-md">
                        Schedule a personalized consultation with our healthcare experts to find the perfect insurance plan for your needs.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900 mb-1">Flexible Scheduling</h4>
                        <p className="text-sm text-gray-600">Choose a time that works for you</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <User className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900 mb-1">Expert Guidance</h4>
                        <p className="text-sm text-gray-600">Personalized advice from professionals</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900 mb-1">Follow-up Support</h4>
                        <p className="text-sm text-gray-600">Ongoing assistance after consultation</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Schedule Time Button - Centered at Bottom */}
              <div className="flex items-center justify-center py-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 relative z-10">
                <button 
                  onClick={() => window.open(url, '_blank')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
                >
                  Schedule time with me
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CalendlyBooking;
