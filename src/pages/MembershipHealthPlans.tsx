import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Users,
  Shield,
  Heart,
  FileText,
  DollarSign,
  Phone,
  Star,
  Download,
  ExternalLink,
  Calendar,
  Stethoscope,
  Building,
  UserCheck,
  HelpCircle,
  TrendingDown,
  AlertCircle
} from 'lucide-react';
import CalendlyBooking from '../components/CalendlyBooking';

function MembershipHealthPlans() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const membershipPlans = [
    {
      id: 'dpc',
      name: 'Direct Primary Care (DPC)',
      subtitle: 'Personal relationship with your doctor',
      price: 'From $75',
      period: 'per month',
      icon: <Stethoscope className="h-8 w-8" />,
      color: 'blue',
      description: 'A doctor that sees you through wellness and recovery without insurance interference. Usually pay a monthly subscription for care throughout the year.',
      features: [
        'Personal relationship with your doctor',
        'No insurance interference',
        'Monthly subscription model',
        'Wellness and recovery support',
        'Less stress, better care',
        'Supports local providers'
      ],
      benefits: [
        'Direct access to your physician',
        'Same-day or next-day appointments',
        'Longer appointment times',
        'Text/email communication with doctor',
        'Wholesale prescription pricing'
      ]
    },
    {
      id: 'concierge',
      name: 'Concierge Doctors',
      subtitle: 'Retainer-based premium care',
      price: 'Annual Fee',
      period: 'or retainer',
      icon: <UserCheck className="h-8 w-8" />,
      color: 'purple',
      description: 'A relationship between a patient and a primary care physician where the patient pays an annual fee or retainer. Great pairing with major medical plan.',
      features: [
        'Annual fee or retainer model',
        'Manager of your healthcare services',
        'Your best interest at heart',
        'Premium personalized service',
        'Comprehensive health management',
        'Pairs with major medical plans'
      ],
      benefits: [
        '24/7 physician access',
        'Comprehensive annual physicals',
        'Preventive care planning',
        'Specialist coordination',
        'Executive health services'
      ]
    },
    {
      id: 'cost-sharing',
      name: 'Medical Cost Sharing',
      subtitle: 'Community-based healthcare sharing',
      price: 'Save 30-40%',
      period: 'on major medical',
      icon: <Users className="h-8 w-8" />,
      color: 'green',
      description: 'Medical cost sharing communities save members between 30% and 40% on MAJOR medical procedures and services. Cost sharing is for major medical events.',
      features: [
        'Save 30-40% on major medical',
        'Community-based sharing',
        'Major medical event coverage',
        'Illness, injury, accident coverage',
        'Diagnosis and treatment sharing',
        'Faith-based options available'
      ],
      benefits: [
        'Lower monthly costs',
        'No network restrictions',
        'Transparent pricing',
        'Community support',
        'Flexible coverage options'
      ]
    },
    {
      id: 'redirect',
      name: 'Redirect Health',
      subtitle: 'Affordable healthcare with hospitalization',
      price: 'Flat Fee',
      period: 'ages 18-64',
      icon: <Shield className="h-8 w-8" />,
      color: 'indigo',
      description: 'Affordable healthcare with NO copay routine primary care that includes hospitalization protection. Minimizes hassle while saving money.',
      features: [
        'No copay routine primary care',
        'Hospitalization protection included',
        'Flat monthly fee (ages 18-64)',
        'Minimizes healthcare hassle',
        'Money-saving approach',
        'Comprehensive coverage'
      ],
      benefits: [
        'Predictable monthly costs',
        'No surprise medical bills',
        'Easy access to care',
        'Hospital coverage included',
        'Streamlined healthcare experience'
      ]
    }
  ];

  const healthsharePlans = [
   /* {
      name: 'Altrua',
      deductible: '$500, $1000, $1500, $7500',
      network: 'Any doctor or hospital',
      er: 'After initial out-of-pocket',
      drVisits: '$35/visit',
      preventative: 'No',
      maternity: 'Varies per plan',
      rxCoverage: 'Manifest Rx',
      brochureLink: '#'
    },*/
    {
      name: 'HSA Secure',
      deductible: '$1000, $2500, $5000',
      network: 'Any doctor or hospital',
      er: 'After initial out-of-pocket',
      drVisits: 'After initial out-of-pocket',
      preventative: 'No limits',
      maternity: 'No Limits',
      rxCoverage: 'Concierge Pharmacy Benefit Program',
      brochureLink: '#'
    },/*
    {
      name: 'JHS Community',
      deductible: '$2500, $5000, $10,000',
      network: 'Any doctor or hospital',
      er: '$400 fee',
      drVisits: '$40/visit',
      preventative: '$500/year',
      maternity: '$40,000 normal delivery',
      rxCoverage: 'Arrive Rx',
      brochureLink: '#'
    },
    {
      name: 'Medi-Share',
      deductible: '$3000, $6000, $9000, $12000',
      network: 'Any doctor or hospital',
      er: '$200 fee',
      drVisits: '$35/visit',
      preventative: 'Not shared',
      maternity: '$125,000',
      rxCoverage: 'Included, 6 months',
      brochureLink: '#'
    },
    {
      name: 'netWell',
      deductible: '$2500, $5000, $10,000',
      network: 'Any doctor or hospital',
      er: '$500 fee',
      drVisits: '$35/visit',
      preventative: '$1500/year',
      maternity: '$15,000 normal delivery',
      rxCoverage: 'NetWell Rx',
      brochureLink: '#'
    },
    {
      name: 'OneShare Health',
      deductible: '$5000, $7,500, $10,000',
      network: 'Any doctor or hospital',
      er: '$500 fee',
      drVisits: '$40/visit',
      preventative: '$1000/year',
      maternity: 'Varies per plan',
      rxCoverage: 'Envision Rx',
      brochureLink: '#'
    },
    {
      name: 'Universal Thrive',
      deductible: '$5000, $7,500, $10,000',
      network: 'Multi-plan PHCS (Any hospital)',
      er: '$300 fee',
      drVisits: '$25/visit',
      preventative: '$1000/year',
      maternity: '$5000 normal delivery',
      rxCoverage: 'RxSimpleShare',
      brochureLink: '#'
    },*/
    {
      name: 'Sedera Health',
      deductible: '$1000, $1500, $2500, $5000',
      network: 'Any doctor or hospital',
      er: 'After initial out-of-pocket',
      drVisits: 'After initial out-of-pocket',
      preventative: 'Not shared',
      maternity: 'No limits, $5000 fee',
      rxCoverage: 'Included, 1st 120 days',
      brochureLink: '#'
    }
  ];

  const additionalPlans = [
    {
      name: 'ShareWELL',
      description: 'Open access to the best Doctors and Hospitals Nationwide. Reference based pricing, fair and transparent medical expenses.',
      features: ['Freedom from insurance contracts', 'Flat monthly fee (ages 18-64)', 'Choice and competition', 'Transparent pricing'],
      url: 'https://sharewellhealth.org/'
    },
    {
      name: 'Zion HealthShare',
      description: 'Choose your initial unshareable amount ($1000, $2500, $5000) then eligible bills are shared in the community.',
      features: ['Excellent maternity options', 'No network restrictions', 'Worldwide sharing', 'Medical concierge included'],
      url: 'https://zionhealthshare.org/members/'
    },
    {
      name: 'MPB Health',
      description: 'Comprehensive, Affordable, Flexible Alternatives to Traditional healthcare Models. The Modern Way to Healthcare!',
      features: ['Protection From Large Medical Expenses', '$0 Virtual Behavioral Health', '$0 Unlimited 24/7/365 Virtual Urgent Care', '$0 Continuous & Personalized Virtual Primary Care'],
      url: 'https://mpb.health/'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 text-white border-blue-500',
      purple: 'bg-purple-500 text-white border-purple-500',
      green: 'bg-green-500 text-white border-green-500',
      indigo: 'bg-indigo-500 text-white border-indigo-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBgColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200',
      purple: 'bg-purple-50 border-purple-200',
      green: 'bg-green-50 border-green-200',
      indigo: 'bg-indigo-50 border-indigo-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Membership Health Plans
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Freedom from contracts. Decide what kind of care, treatment or remedy you want 
              for yourself, family or business before you sign a health plan contract.
            </p>
            
            {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Comparison Worksheet
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Planning Worksheet
              </button>
            </div>*/}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: <Heart className="h-4 w-4" /> },
              { id: 'primary-plans', label: 'Healthshare Plans', icon: <Users className="h-4 w-4" /> },
              { id: 'additional', label: 'Additional Options', icon: <Shield className="h-4 w-4" /> },
              { id: 'comparison', label: 'Compare Plans', icon: <FileText className="h-4 w-4" /> },
              { id: 'faq', label: 'FAQ', icon: <HelpCircle className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-12 text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find the Best Healthshare Plans for You
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Healthshare plans & medical cost sharing programs are affordable alternatives to traditional health insurance. Discover how you can save 30-50% while getting the coverage you need.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Free Healthshare PDF Download
              </button>
            </div>

            {/* All You Need to Know Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                All You Need To Know About Healthshare Plans
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pay Monthly Contributions vs. Premiums</h3>
                  <p className="text-gray-600">
                    Health care sharing memberships do not have "premiums", but rather "contribution amounts" that go into a shared pool.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Payments Half or Less</h3>
                  <p className="text-gray-600">
                    Numerous factors make health sharing much less expensive than unsubsidized health insurance, including a healthier membership base.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Special Requirements</h3>
                  <p className="text-gray-600">
                    Health care sharing programs typically have a waiting period before they will share for pre-existing conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Plan Categories */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Choose Based on Your Unique Needs & Priorities
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Tax Benefits Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Tax Benefits of an HSA</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    If you are interested in the tax benefits of an HSA, look at the <a href="#" className="text-blue-600 hover:underline font-semibold">HSA Secure</a>. You can also consider adding the <a href="#" className="text-blue-600 hover:underline font-semibold">HSA MEC</a> to any other healthshare.
                  </p>
                </div>

                {/* First-Dollar Care Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">First-Dollar Doctor Visits & Preventive Care</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    If you are interested in a more comprehensive plan, we invite you to compare our preventative care plans.
                  </p>
                </div>

                {/* Low-Cost Catastrophic Card */}
              {/*  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Low-Cost Catastrophic Focused Plan</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    If you want a low-cost catastrophic-focused plan, be sure to look at <a href="#" className="text-blue-600 hover:underline font-semibold">JHS Community</a>. This plan has a high initial out-of-pocket exposure but generally offers a lower cost for some patients.
                  </p>
                </div>
               */}
                {/* Christian Philosophy Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Stronger Christian Philosophy</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    If you are interested in a plan that has a stronger Christian philosophy, take a close look at <a href="#" className="text-blue-600 hover:underline font-semibold">Medi-Share</a>.
                  </p>
                </div>

                {/* No Religious Component Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Programs with No Religious Component</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    If you want a program with no religious affiliation, you can sign up for <a href="#" className="text-blue-600 hover:underline font-semibold">HSA Secure</a>, Care+, or <a href="#" className="text-blue-600 hover:underline font-semibold">Sedera</a>.
                  </p>
                </div>

                {/* Small Group Card 
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Small Group Options</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    If you have a small group that you need a plan for, <a href="#" className="text-blue-600 hover:underline font-semibold">1Complete Solution</a> is a popular comprehensive program.
                  </p>
                </div>
                */}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30-40%</div>
                <div className="text-gray-600">Average Savings</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">No</div>
                <div className="text-gray-600">Network Restrictions</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Access Available</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600">Transparent Pricing</div>
              </div>
            </div>
          </div>
        )}

        {/* Healthshare Plans Tab */}
        {activeTab === 'primary-plans' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Healthshare & Medical Cost Sharing Plans</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Medical cost sharing communities save members between 30% and 50% compared to traditional health insurance. These plans are perfect for major medical events and catastrophic coverage.
              </p>
            </div>

            {/* Detailed Plan Comparison Tables */}
            <div className="space-y-8 mb-12">
              {/* First Table - Plans 1-4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900 bg-yellow-50">Plan Features</th>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <th key={idx} className="px-4 py-4 text-center text-sm font-semibold text-white bg-slate-800 min-w-[180px]">
                            {plan.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 bg-yellow-50">Deductible/IUA</td>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <td key={idx} className="px-4 py-4 text-sm text-gray-700 text-center bg-gray-50">{plan.deductible}</td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 bg-yellow-50">HMO/PPO Network Required?</td>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <td key={idx} className="px-4 py-4 text-sm text-gray-700 text-center">{plan.network}</td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 bg-yellow-50">ER</td>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <td key={idx} className="px-4 py-4 text-sm text-gray-700 text-center bg-white">{plan.er}</td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 bg-yellow-50">Dr. Visits</td>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <td key={idx} className="px-4 py-4 text-sm text-gray-700 text-center bg-gray-50">{plan.drVisits}</td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 bg-yellow-50">Preventative</td>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <td key={idx} className="px-4 py-4 text-sm text-gray-700 text-center bg-white">{plan.preventative}</td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 bg-yellow-50">Maternity</td>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <td key={idx} className="px-4 py-4 text-sm text-gray-700 text-center bg-gray-50">{plan.maternity}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 bg-yellow-50">Rx Coverage</td>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <td key={idx} className="px-4 py-4 text-sm text-gray-700 text-center bg-white">{plan.rxCoverage}</td>
                        ))}
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-4 bg-yellow-50"></td>
                        {healthsharePlans.slice(0, 4).map((plan, idx) => (
                          <td key={idx} className="px-4 py-4 text-center">
                            <button 
                              onClick={() => window.open('https://joinmpb.com/hari_p_cheedella/', '_blank', 'noopener,noreferrer')}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              Subscribe
                            </button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Second Table - Plans 5-8 */}
              
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {membershipPlans.map((plan) => (
                <div key={plan.id} className={`bg-white rounded-xl shadow-lg border-2 ${getBgColorClasses(plan.color)} transition-all hover:shadow-xl hover:-translate-y-1`}>
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg mr-4 ${getColorClasses(plan.color)}`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-gray-600">{plan.subtitle}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500 ml-2">{plan.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">{plan.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits Include:</h4>
                      <ul className="space-y-2">
                        {plan.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Star className="h-4 w-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex space-x-3">
                      <CalendlyBooking
                        buttonText="Learn More"
                        buttonClassName={`flex-1 py-3 rounded-lg font-semibold transition-colors ${getColorClasses(plan.color)}`}
                      />
                      <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Compare
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Options Tab */}
        {activeTab === 'additional' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Membership Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore specialized membership plans and supplemental options to enhance your healthcare coverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalPlans.map((plan, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <p className="text-gray-700 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-3">
                    <CalendlyBooking
                      buttonText="Get Details"
                      buttonClassName="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors"
                    />
                    <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center">
                     <a href={plan.url} target="_blank" rel="noopener noreferrer">
                      Visit</a>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Independent Doctors Section */}
           {/*
            <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
              <div className="text-center mb-8">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Independent Doctors & Clinics</h3>
                <p className="text-xl text-gray-600">No Insurance, No Problem! Clear and transparent pricing with exceptional service.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Stethoscope className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">TheDrsHouse</h4>
                  <p className="text-gray-600 text-sm">Better-than-concierge medicine for adults with contemporary, home-like clinic design.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Parkway Clinic</h4>
                  <p className="text-gray-600 text-sm">Family-focused healthcare provider offering comprehensive care for all family members.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">PrimaCare Direct</h4>
                  <p className="text-gray-600 text-sm">Subscription DPC with flat monthly fee of $75 per person. Great for regular medical needs.</p>
                </div>
              </div> 
            </div>*/}
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Plan Comparison</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare features, benefits, and pricing across all membership health plan options.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Direct Primary Care</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Concierge Medicine</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Cost Sharing</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Redirect Health</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Cost</td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">From $75</td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">Annual Fee</td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">Varies</td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">Flat Fee</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Direct Doctor Access</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Hospital Coverage</td>
                      <td className="px-6 py-4 text-center">❌</td>
                      <td className="px-6 py-4 text-center">With Major Medical</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Network Restrictions</td>
                      <td className="px-6 py-4 text-center">❌</td>
                      <td className="px-6 py-4 text-center">❌</td>
                      <td className="px-6 py-4 text-center">❌</td>
                      <td className="px-6 py-4 text-center">❌</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Prescription Benefits</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center">Varies</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about healthshare plans and medical cost sharing.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg">
              {[
                {
                  q: 'What is a health share plan?',
                  a: 'Healthshare plans are a low-cost alternative to traditional health insurance. While not technically insurance, healthshare plans allow members to protect themselves against large or unexpected medical costs. In most cases, healthshare plans are more affordable than unsubsidized ACA health insurance plans.'
                },
                {
                  q: 'Is healthshare an insurance policy?',
                  a: 'Healthshare plans differ from insurance in many ways. They are not governed by the statutes that traditional health insurance must adhere to. Because these healthshare plans are akin to private coverage, they are not regulated. This makes them much more free to craft individualized and unique coverage policy types for members.'
                },
                {
                  q: 'How do healthshare plans work?',
                  a: 'With health sharing plans, members make a monthly contribution towards a shared "pool" of resources. When a member incurs a qualified medical expense, they can be reimbursed from this pool. In other words, healthshare plans are inherently communal. They make it possible to share the cost of medical expenses with other members of your community.'
                },
                {
                  q: 'Are healthshare plans just for Christians?',
                  a: 'In the beginning, health sharing plans were only offered by Health Care Sharing Ministries. Today, however, medical sharing plans are available to almost everyone. While some healthshare plans do have a Christian religious component, there are plenty of non-Christian plans and countless plans that do not have a religious component at all.'
                },
                {
                  q: 'How much does healthshare cost?',
                  a: 'In many cases, a good healthshare plan can be as little as 50% of the cost of unsubsidized insurance. But like insurance plans, most healthshare companies let their members choose from a range of monthly costs and coverage options. We recommend comparing the healthshare cost to prospective costs under a traditional insurance policy.'
                },
                {
                  q: 'Is health sharing legal?',
                  a: 'Healthshare plans are 100% legal, which has made them the single most popular alternative to traditional health insurance. However, healthshare organizations are not regulated on the federal level the way that insurance companies are. This is part of the reason why they are more affordable.'
                },
                {
                  q: 'Do healthshare plans cover pre-existing conditions?',
                  a: 'Health care sharing programs typically have a waiting period before they will share for pre-existing conditions. The waiting period varies by plan and condition. Some plans may never share for certain pre-existing conditions, so it\'s important to review the specific terms of each plan.'
                },
                {
                  q: 'Who is eligible for sharing?',
                  a: 'Eligibility requirements vary by healthshare organization. Some have faith-based requirements, while others are open to anyone. Most require members to maintain a healthy lifestyle and may have restrictions on tobacco use or other health-related behaviors. Contact us to find the right plan for your situation.'
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</span>
                    <HelpCircle className={`h-6 w-6 text-blue-600 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA in FAQ */}
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our healthcare advisors are here to help you understand healthshare plans and find the perfect option for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +1 (803) 728-6698
                </button>
                <CalendlyBooking
                  buttonText="Schedule Consultation"
                  buttonClassName="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Choose Your Plan?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our healthcare advisors are here to help you find the perfect membership plan for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 (803) 728-6698
            </button>
            <CalendlyBooking
              buttonText="Schedule Consultation"
              buttonClassName="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors border-2 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipHealthPlans;
