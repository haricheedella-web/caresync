// Utility function to get the correct image path based on environment
export const getImagePath = (imageName: string): string => {
  // Check if we're in development (localhost) or production (GitHub Pages)
  const isDevelopment = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  
  if (isDevelopment) {
    // For local development, use the base path + images directory
    // Since Vite config has base: '/caresync/', images are served from /caresync/images/
    return `/caresync/images/${imageName}`;
  } else {
    // For GitHub Pages deployment, use the base path + images directory
    // Images are copied to dist/images during build
    return `/caresync/images/${imageName}`;
  }
};

// Predefined image paths for easy use
export const images = {
  logo: () => getImagePath('logo.jpg'),
  doc: () => getImagePath('doc.jpg'),
  healthinsurance: () => getImagePath('healthinsurance.png'),
  medicare: () => getImagePath('medicare.jpg'),
  healthcircle: () => getImagePath('healthcircle.jpg'),
  ready: () => getImagePath('ready.jpg'),
  bookDoctor: () => getImagePath('book-doctor-appointment.jpg'),
  download: () => getImagePath('download.png'),
  image: () => getImagePath('image.jpg'),
};
