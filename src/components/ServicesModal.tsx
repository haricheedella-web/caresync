import { useState } from 'react';
import { X, FileText, Download, Eye, Heart, Shield, Users, Stethoscope, Clock } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'image' | 'document';
  url: string;
  description?: string;
}

interface Service {
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

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

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

const ServicesModal = ({ isOpen, onClose, service }: ServicesModalProps) => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  if (!isOpen || !service) return null;

  const handleDocumentClick = (doc: Document) => {
    setSelectedDocument(doc);
  };

  const handleDownload = (doc: Document) => {
    const link = document.createElement('a');
    link.href = doc.url;
    link.download = doc.name;
    link.click();
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'image':
        return <Eye className="h-5 w-5 text-blue-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    {getIconComponent(service.iconType)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="text-blue-100">{service.description}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Service Details */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.detailedDescription}</p>
                
                {/* Service Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {service.pricing && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Pricing</h4>
                      <p className="text-blue-600 font-medium">{service.pricing}</p>
                    </div>
                  )}
                  {service.duration && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                      <p className="text-green-600 font-medium">{service.duration}</p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              {service.documents.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Documents</h3>
                  <div className="grid gap-4">
                    {service.documents.map((doc) => (
                      <div 
                        key={doc.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => handleDocumentClick(doc)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {getDocumentIcon(doc.type)}
                            <div className="ml-3">
                              <h4 className="font-medium text-gray-900">{doc.name}</h4>
                              {doc.description && (
                                <p className="text-sm text-gray-600">{doc.description}</p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownload(doc);
                              }}
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                              title="Download"
                            >
                              <Download className="h-5 w-5" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDocumentClick(doc);
                              }}
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                              title="View"
                            >
                              <Eye className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Document Viewer Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 z-60 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
              onClick={() => setSelectedDocument(null)}
            />
            
            {/* Document Viewer */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{selectedDocument.name}</h3>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Document Content */}
              <div className="p-4 bg-gray-100 h-[calc(90vh-80px)] overflow-auto">
                {selectedDocument.type === 'image' ? (
                  <img 
                    src={selectedDocument.url} 
                    alt={selectedDocument.name}
                    className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <FileText className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">Document preview not available</p>
                      <button
                        onClick={() => handleDownload(selectedDocument)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Download Document
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesModal;
