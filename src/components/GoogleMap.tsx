interface GoogleMapProps {
  latitude?: number;
  longitude?: number;
  address?: string;
  businessName?: string;
  height?: string;
  zoom?: number;
}

function GoogleMap({ 
  latitude = 34.00700167157646, 
  longitude = -81.12151069999999,
  address = "3020 Sunset Blvd, West Columbia, SC 29169, USA",
  businessName = "CareSync Dynamic Advisors",
  height = "400px",
  zoom = 15
}: GoogleMapProps) {
  
  // Create Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${latitude},${longitude}&zoom=${zoom}`;
  
  // Fallback to address-based embed if coordinates don't work
  const fallbackUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${encodeURIComponent(address)}&zoom=${zoom}`;

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg" style={{ height }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${businessName}`}
        onError={(e) => {
          // Fallback to address-based URL if coordinates fail
          (e.target as HTMLIFrameElement).src = fallbackUrl;
        }}
      />
    </div>
  );
}

export default GoogleMap;
