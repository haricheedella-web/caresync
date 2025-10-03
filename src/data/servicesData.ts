export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'image' | 'document' | 'link';
  url: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconType: string;
  features: string[];
  documents: Document[];
  pricing?: string;
  duration?: string;
}

export const servicesData: Service[] = [
  {
    id: 'health-insurance',
    title: 'Health Insurance Plans',
    description: 'Comprehensive health insurance options tailored to your needs and budget.',
    detailedDescription: 'Our health insurance plans are designed to provide comprehensive coverage while keeping costs manageable. We work with multiple top-rated insurance carriers to find the perfect plan that matches your healthcare needs, budget, and lifestyle. Whether you\'re looking for individual coverage, family plans, or group benefits, we have solutions that prioritize both your health and financial well-being.',
    iconType: 'heart',
    features: [
      'Individual & Family Plans',
      'Group Health Benefits',
      'Medicare Solutions',
      'Short-term Coverage',
      'Prescription Drug Coverage',
      'Preventive Care Services',
      'Emergency Coverage',
      'Mental Health Services'
    ],
    documents: [
      {
        id: 'health-plan-brochure',
        name: 'Health Insurance Plan Brochure',
        type: 'image',
        url: '/src/components/doc.jpg',
        description: 'Comprehensive overview of our health insurance plans and coverage options'
      },
      {
        id: 'coverage-comparison',
        name: 'Coverage Comparison Chart',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Side-by-side comparison of different plan options and benefits'
      }
    ]
  },
  {
    id: 'medicare-consultation',
    title: 'Medicare Consultation',
    description: 'Expert guidance for Medicare enrollment and plan selection with comprehensive documentation library.',
    detailedDescription: 'Navigating Medicare can be complex, but our experienced advisors are here to help you understand your options and make informed decisions. We provide personalized consultations to help you choose between Original Medicare, Medicare Advantage, and supplemental plans. Our comprehensive Medicare documentation library includes detailed guides covering Medicare Parts A, B, C, and D, enrollment periods, supplement insurance, veterans benefits, and financial planning. With over 11 specialized documents, we ensure you have all the information needed to make the best decisions for your healthcare needs. We work with EOS (End of Service) advisors to provide data-driven, unbiased recommendations and advanced tools for personalized needs assessments. Special attention is given to veterans who need to understand how VA benefits and Tricare coordinate with Medicare coverage.',
    iconType: 'shield',
    features: [
      'Medicare Parts A, B, C & D Guidance',
      'Medicare Supplement (Medigap) Plans',
      'Prescription Drug Coverage (Part D)',
      'Enrollment Period Assistance',
      'Veterans Benefits Coordination',
      'Medicaid & Medicare Dual Eligibility',
      'Financial Planning & Cost Analysis',
      'EOS Data-Driven Recommendations',
      'Personalized Needs Assessment',
      'Annual Plan Review & Updates',
      'Wellness & Preventive Care Guidance',
      '11+ Comprehensive Guides'
    ],
    documents: [
      {
        id: 'medicare-101',
        name: 'Medicare 101 - Understanding the Basics and Eligibility',
        type: 'pdf',
        url: '/Medicare/Medicare 101.docx',
        description: 'Complete guide covering what Medicare is, who qualifies (age 65+, disability, ESRD, ALS), and the basics of Medicare Parts A, B, C, and D. Includes eligibility criteria and enrollment information.'
      },
      {
        id: 'medicare-supplement-guide',
        name: 'Do I Need a Medicare Supplement Insurance (Medigap) Policy?',
        type: 'pdf',
        url: '/Medicare/Do I Need a Medicare Supplement.docx',
        description: 'Detailed analysis of Medigap policies, how they work with Original Medicare, benefits including deductibles and co-payments coverage, and factors to consider before enrollment.'
      },
      {
        id: 'medicare-part-a-guide',
        name: 'Your Guide to Medicare Part A (Hospital Insurance)',
        type: 'pdf',
        url: '/Medicare/Your Guide to Medicare Part A.docx',
        description: 'Comprehensive guide to Medicare Part A covering inpatient hospital stays, skilled nursing facility care, home health services, coverage limits, benefit periods, and associated costs.'
      },
      {
        id: 'medicare-part-d-guide',
        name: 'Your Guide to Medicare Part D (Prescription Drug Coverage)',
        type: 'pdf',
        url: '/Medicare/Your Guide to Medicare Part D.docx',
        description: 'Complete guide to Medicare Part D prescription drug coverage, including benefits, costs (premiums, deductibles, copayments), enrollment periods, and plan selection strategies.'
      },
      {
        id: 'medicare-enrollment-guide',
        name: 'When Can I Enroll in Medicare or Make Changes to My Coverage?',
        type: 'pdf',
        url: '/Medicare/When can i enrol.docx',
        description: 'Critical enrollment period information including Initial Enrollment Period (IEP), General Enrollment Period (GEP), Special Enrollment Periods (SEP), and Annual Election Period (AEP) dates and requirements.'
      },
      {
        id: 'medicare-veterans-guide',
        name: 'Veterans and Medicare: How VA and Tricare Fit into the Picture',
        type: 'pdf',
        url: '/Medicare/Veterans.docx',
        description: 'Comprehensive guide for veterans explaining VA benefits and Tricare coordination with Medicare. Covers coexistence of VA benefits and Medicare, Tricare for Life (TFL) as secondary payer, enrollment requirements, prescription benefits coordination, and how EOS helps veterans make informed decisions about their unique healthcare needs.'
      },
      {
        id: 'medicare-medicaid-programs',
        name: 'Medicaid and Medicare Programs: How Medicaid Influences Medicare Health Plan Choices',
        type: 'pdf',
        url: '/Medicare/Medicaid and Medicare programs.docx',
        description: 'Understanding dual eligibility, how Medicaid affects Medicare decisions, Dual-Eligible Special Needs Plans (D-SNPs), prescription drug coverage coordination, and benefit coordination.'
      },
      {
        id: 'medicare-links-resources',
        name: 'Medicare Links and Resources - EOS Advisor Platform',
        type: 'pdf',
        url: '/Medicare/Medicare - links.docx',
        description: 'Essential EOS advisor links and resources: Main platform (https://www.eosadvisor.com/), Get Started button (https://eosadvisor.com/advisor/ADS1759248256194259/public), YouTube channel (https://www.youtube.com/watch?v=ryxtr3nOEfU), and FAQs (https://eosadvisor.com/faqs). Access data-driven Medicare guidance and personalized assessments.'
      },
      {
        id: 'balancing-health-wealth',
        name: 'Balancing Health and Wealth: A Close Look at Medicare Costs',
        type: 'pdf',
        url: '/Medicare/Balancing Health and Wealth.docx',
        description: 'Financial planning guide covering Medicare Parts A, B, C, and D costs, Medigap considerations, and three key tips for balancing health and wealth in retirement planning.'
      },
      {
        id: 'staying-healthy-guide',
        name: 'Staying Healthy with Medicare: Wellness and Preventative Benefits',
        type: 'pdf',
        url: '/Medicare/Staying Healthy with.docx',
        description: 'Comprehensive wellness guide covering annual wellness visits, health screenings (cardiovascular, cancer, bone mass, diabetes), vaccinations, counseling services, and preventive care benefits.'
      },
      {
        id: 'medicare-b2b2c-flyer',
        name: 'Medicare B2B2C Flyer - EOS Advisor Services',
        type: 'pdf',
        url: '/Medicare/EOS_B2B2C_Flyer.pdf',
        description: 'Official EOS advisor flyer highlighting trust-based Medicare guidance, smart plan selection with data-driven recommendations, advanced tools for personalized assessments, and customer satisfaction testimonials.'
      }
    ],
    pricing: 'Free consultation',
    duration: '1-hour sessions'
  },
  {
    id: 'veterans-medicare-coordination',
    title: 'Veterans Medicare Coordination',
    description: 'Specialized guidance for veterans navigating VA benefits, Tricare, and Medicare coordination.',
    detailedDescription: 'Veterans often have complex healthcare coverage options including VA benefits and Tricare. Our specialized veterans Medicare coordination service helps you understand how these systems work together with Medicare. We provide expert guidance on VA benefits and Medicare coexistence, Tricare for Life (TFL) coordination, enrollment requirements, prescription benefits coordination, and how to optimize your coverage for maximum benefits and cost savings. Our EOS advisors understand the unique needs of veterans and help you make informed decisions that preserve both your health and the honor of your service.',
    iconType: 'shield',
    features: [
      'VA Benefits & Medicare Coordination',
      'Tricare for Life (TFL) Guidance',
      'Dual Coverage Optimization',
      'Prescription Benefits Coordination',
      'Enrollment Requirements',
      'Coverage Flexibility Options',
      'Cost Savings Strategies',
      'EOS Veterans Support',
      'Timely Enrollment Assistance',
      'Specialized Veterans Resources'
    ],
    documents: [
      {
        id: 'veterans-comprehensive-guide',
        name: 'Veterans and Medicare: Complete Coordination Guide',
        type: 'pdf',
        url: '/Medicare/Veterans.docx',
        description: 'Comprehensive guide covering VA benefits and Medicare coexistence, Tricare for Life coordination, enrollment requirements, prescription benefits, and EOS support for veterans making healthcare decisions.'
      },
      {
        id: 'veterans-enrollment-guide',
        name: 'Veterans Medicare Enrollment Guide',
        type: 'pdf',
        url: '/Medicare/When can i enrol.docx',
        description: 'Specialized enrollment guidance for veterans including timing considerations, late-enrollment penalties, and coordination with existing VA/Tricare benefits.'
      },
      {
        id: 'veterans-prescription-guide',
        name: 'Veterans Prescription Benefits Coordination',
        type: 'pdf',
        url: '/Medicare/Your Guide to Medicare Part D.docx',
        description: 'Guide to coordinating VA prescription benefits with Medicare Part D, including cost considerations and convenience factors for veterans.'
      }
    ],
    pricing: 'Free veterans consultation',
    duration: '1-hour specialized sessions'
  },
  {
    id: 'eos-advisor-platform',
    title: 'EOS Advisor Platform',
    description: 'Access our advanced EOS advisor platform for data-driven Medicare guidance and personalized assessments.',
    detailedDescription: 'Our EOS (End of Service) advisor platform provides cutting-edge tools and resources for Medicare decision-making. With 67 million Americans relying on Medicare and facing rising deceptive marketing practices, EOS fills the trust gap by offering reliable, compliant, and client-first Medicare guidance. The platform features smart plan selection with data-driven recommendations, advanced tools for personalized needs assessments, plan-fit ratings, educational resources, self-enrollment platform, and ongoing retention support. Our customer satisfaction testimonials highlight personalized care, trust, and clarity throughout the enrollment journey.',
    iconType: 'users',
    features: [
      'Data-Driven Plan Selection',
      'Personalized Needs Assessment',
      'Plan-Fit Ratings',
      'Educational Resources',
      'Self-Enrollment Platform',
      'Ongoing Retention Support',
      'Customer Satisfaction Focus',
      'Trust-Based Guidance',
      'Compliant Recommendations',
      'Client-First Approach'
    ],
    documents: [
      {
        id: 'eos-main-platform',
        name: 'EOS Advisor Main Platform',
        type: 'link',
        url: 'https://www.eosadvisor.com/',
        description: 'Main EOS advisor platform providing comprehensive Medicare guidance, tools, and resources for informed decision-making.'
      },
      {
        id: 'eos-get-started',
        name: 'Get Started - EOS Advisor',
        type: 'link',
        url: 'https://eosadvisor.com/advisor/ADS1759248256194259/public',
        description: 'Direct access to EOS advisor services with personalized Medicare guidance and plan recommendations.'
      },
      {
        id: 'eos-youtube',
        name: 'EOS YouTube Channel',
        type: 'link',
        url: 'https://www.youtube.com/watch?v=ryxtr3nOEfU',
        description: 'Educational videos and resources on Medicare planning, enrollment, and coverage options.'
      },
      {
        id: 'eos-faqs',
        name: 'EOS FAQs',
        type: 'link',
        url: 'https://eosadvisor.com/faqs',
        description: 'Frequently asked questions about Medicare, EOS services, enrollment, and coverage options.'
      }
    ],
    pricing: 'Free platform access',
    duration: '24/7 online access'
  },
  {
    id: 'group-benefits',
    title: 'Group Health Benefits',
    description: 'Comprehensive employee health benefits for businesses of all sizes.',
    detailedDescription: 'We help businesses provide competitive health benefits to attract and retain top talent. Our group health benefit solutions are designed to balance comprehensive coverage with cost-effectiveness. We work with employers to design benefit packages that meet both employee needs and budget constraints, ensuring your workforce stays healthy and productive.',
    iconType: 'users',
    features: [
      'Employee Health Plans',
      'Dental & Vision Coverage',
      'Life Insurance',
      'Disability Insurance',
      'Wellness Programs',
      'COBRA Administration',
      'Claims Management',
      'Employee Education'
    ],
    documents: [
      {
        id: 'group-benefits-overview',
        name: 'Group Benefits Overview',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Comprehensive guide to group health benefits and implementation'
      },
      {
        id: 'employee-handbook',
        name: 'Employee Benefits Handbook',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Sample employee handbook template for benefits communication'
      }
    ],
    pricing: 'Custom quotes available',
    duration: 'Ongoing support'
  },
  {
    id: 'healthcare-consultation',
    title: 'Healthcare Consultation',
    description: 'Personalized healthcare planning and insurance strategy sessions.',
    detailedDescription: 'Our healthcare consultation services provide you with expert guidance on all aspects of health insurance and healthcare planning. We take the time to understand your unique situation, health needs, and financial goals to recommend the best insurance solutions. Our consultations are comprehensive, educational, and focused on helping you make informed decisions about your healthcare coverage.',
    iconType: 'stethoscope',
    features: [
      'Needs Assessment',
      'Plan Comparison',
      'Cost Analysis',
      'Provider Network Review',
      'Claims Assistance',
      'Annual Plan Review',
      'Healthcare Strategy',
      'Ongoing Support'
    ],
    documents: [
      {
        id: 'consultation-checklist',
        name: 'Consultation Preparation Checklist',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Checklist to help you prepare for your healthcare consultation'
      },
      {
        id: 'healthcare-planning',
        name: 'Healthcare Planning Guide',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Guide to long-term healthcare planning and insurance strategy'
      }
    ],
    pricing: 'Free initial consultation',
    duration: '1-2 hour sessions'
  },
  {
    id: 'short-term-coverage',
    title: 'Short-term Coverage',
    description: 'Flexible temporary health insurance solutions for life transitions.',
    detailedDescription: 'Life changes often require temporary health coverage solutions. Whether you\'re between jobs, waiting for employer benefits to begin, or need coverage during a transition period, our short-term health insurance plans provide flexible, affordable options. These plans offer essential coverage for unexpected medical expenses while you secure long-term insurance.',
    iconType: 'clock',
    features: [
      'Temporary Coverage',
      'Flexible Terms',
      'Quick Enrollment',
      'Essential Benefits',
      'Emergency Coverage',
      'Prescription Coverage',
      'Network Access',
      'Easy Cancellation'
    ],
    documents: [
      {
        id: 'short-term-guide',
        name: 'Short-term Coverage Guide',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Complete guide to short-term health insurance options'
      },
      {
        id: 'transition-planning',
        name: 'Health Insurance Transition Planning',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Tips for managing health insurance during life transitions'
      }
    ],
    pricing: 'Starting from $80/month',
    duration: '1-12 month terms'
  },
  {
    id: 'prescription-coverage',
    title: 'Prescription Drug Coverage',
    description: 'Comprehensive prescription drug plans and medication management.',
    detailedDescription: 'Prescription medications are a crucial part of healthcare, and our prescription drug coverage plans ensure you have access to the medications you need at affordable prices. We work with pharmacy benefit managers and insurance carriers to provide comprehensive drug coverage that includes both generic and brand-name medications, specialty drugs, and mail-order pharmacy services.',
    iconType: 'file-text',
    features: [
      'Generic & Brand Drugs',
      'Specialty Medications',
      'Mail-order Pharmacy',
      'Formulary Management',
      'Prior Authorization',
      'Step Therapy',
      'Quantity Limits',
      'Pharmacy Network'
    ],
    documents: [
      {
        id: 'prescription-formulary',
        name: 'Prescription Drug Formulary',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Complete list of covered medications and copay information'
      },
      {
        id: 'medication-guide',
        name: 'Medication Management Guide',
        type: 'pdf',
        url: '/src/components/doc.jpg',
        description: 'Guide to managing prescription medications and costs'
      }
    ],
    pricing: 'Included with health plans',
    duration: 'Annual coverage'
  }
];

export default servicesData;
