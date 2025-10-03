import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CalendlyBooking from '../components/CalendlyBooking';

function MembershipPlans() {
  const navigate = useNavigate();

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
      description: 'Perfect for individuals who want essential healthcare support and wellness resources.',
      bestFor: ['Young professionals', 'Budget-conscious individuals', 'General wellness maintenance'],
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
      description: 'Comprehensive care for those seeking enhanced health and wellness support.',
      bestFor: ['Professionals with health goals', 'Those with chronic conditions', 'Mental health awareness'],
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
      description: 'Complete healthcare solution designed for families of all sizes.',
      bestFor: ['Families with children', 'Multi-generational households', 'Comprehensive family coverage'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Membership Health Plans</h1>
          <p className="text-xl text-gray-300 mt-2">
            Choose the perfect membership plan tailored to your healthcare needs
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Why Choose Our Membership Plans?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No Insurance Required</h3>
              <p className="text-gray-600">
                Access quality healthcare services without the complexity of traditional insurance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Know exactly what you're paying each month with no hidden fees or surprises
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Cancel Anytime</h3>
              <p className="text-gray-600">
                No long-term contracts or commitments - flexibility when you need it most
              </p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg transition-all transform hover:-translate-y-2 relative flex flex-col ${
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
              <div className="p-8 flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Features Include:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Best For:</h4>
                  <ul className="space-y-1">
                    {plan.bestFor.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 pt-0">
                <CalendlyBooking
                  buttonText="Get Started"
                  buttonClassName={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                How is this different from traditional health insurance?
              </h3>
              <p className="text-gray-600">
                Our membership plans are designed to complement or supplement traditional insurance. They
                provide direct access to healthcare services at transparent, affordable prices without the
                complexity of claims and deductibles.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Can I use this with my existing insurance?
              </h3>
              <p className="text-gray-600">
                Yes! Our membership plans work alongside your existing insurance coverage. Many members use
                our services for convenience, additional benefits, or to fill gaps in their current coverage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What if I need to cancel my membership?
              </h3>
              <p className="text-gray-600">
                You can cancel your membership at any time with no penalties or fees. Simply contact our
                member services team, and your cancellation will be processed by the end of your current
                billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Are prescription medications covered?
              </h3>
              <p className="text-gray-600">
                While our plans don't cover prescription costs directly like insurance, all members receive
                access to prescription discount cards that can save up to 80% on medications at participating
                pharmacies nationwide.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-12 text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our healthcare advisors are here to help you choose the perfect plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-800-555-CARE"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call 1-800-555-CARE
            </a>
            <button
              onClick={() => navigate('/#contact')}
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors border-2 border-white"
            >
              Contact Us Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipPlans;
