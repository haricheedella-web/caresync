import { MapPin } from 'lucide-react';

interface SimpleMapProps {
  latitude?: number;
  longitude?: number;
  address?: string;
  businessName?: string;
  height?: string;
}

function SimpleMap({ 
  latitude = 34.00700167157646, 
  longitude = -81.12151069999999,
  address = "3020 Sunset Blvd, West Columbia, SC 29169, USA",
  businessName = "CareSync Dynamic Advisors",
  height = "500px"
}: SimpleMapProps) {
  
  // Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${latitude},${longitude}&zoom=15`;

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white">
      {/* Address Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center">
        <MapPin className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0" />
        <p className="text-gray-800 font-medium">{address}</p>
      </div>
      
      {/* Google Map */}
      <div style={{ height }}>
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${businessName}`}
        />
      </div>
    </div>
  );
}

export default SimpleMap;
