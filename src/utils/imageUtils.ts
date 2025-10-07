// Alternative approach: Use Vite's import system for better asset handling
import logoImg from '/images/logo.jpg';
import docImg from '/images/doc.jpg';
import healthinsuranceImg from '/images/healthinsurance.png';
import medicareImg from '/images/medicare.jpg';
import healthcircleImg from '/images/healthcircle.jpg';
import readyImg from '/images/ready.jpg';
import bookDoctorImg from '/images/book-doctor-appointment.jpg';
import downloadImg from '/images/download.png';
import imageImg from '/images/image.jpg';

// Predefined image paths for easy use
export const images = {
  logo: () => logoImg,
  doc: () => docImg,
  healthinsurance: () => healthinsuranceImg,
  medicare: () => medicareImg,
  healthcircle: () => healthcircleImg,
  ready: () => readyImg,
  bookDoctor: () => bookDoctorImg,
  download: () => downloadImg,
  image: () => imageImg,
};
