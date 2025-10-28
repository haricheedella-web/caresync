import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Shield, Users, Stethoscope, Clock, CheckCircle, FileText } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const getIconComponent = (iconType: string) => {
  const iconProps = { className: "h-8 w-8" };
  
  switch (iconType) {
    case 'heart':
      return <Heart {...iconProps} style={{ color: '#2563eb' }} />;
    case 'shield':
      return <Shield {...iconProps} style={{ color: '#16a34a' }} />;
    case 'users':
      return <Users {...iconProps} style={{ color: '#9333ea' }} />;
    case 'stethoscope':
      return <Stethoscope {...iconProps} style={{ color: '#dc2626' }} />;
    case 'clock':
      return <Clock {...iconProps} style={{ color: '#ea580c' }} />;
    case 'file-text':
      return <FileText {...iconProps} style={{ color: '#4f46e5' }} />;
    default:
      return <Heart {...iconProps} style={{ color: '#2563eb' }} />;
  }
};


const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Get the service data based on the serviceId parameter
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </button>
            <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Service Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start">
            <div className="bg-blue-100 p-4 rounded-lg mr-6">
              {getIconComponent(service.iconType)}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              
            
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h3>
          <p className="text-gray-700 leading-relaxed mb-6">{service.detailedDescription}</p>
          
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default ServicePage;
