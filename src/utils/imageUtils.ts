// Utility function to get the correct image path for GitHub Pages
export const getImagePath = (imageName: string): string => {
  // Since Vite config has base: '/caresync/', all assets are served from /caresync/
  // This works for both development and production
  return `/caresync/images/${imageName}`;
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
