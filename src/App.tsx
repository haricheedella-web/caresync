import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import HealthInsurancePlans from './pages/HealthInsurancePlans';
import MedicareConsultation from './pages/MedicareConsultation';
import MembershipPlans from './pages/MembershipPlans';
import MembershipHealthPlans from './pages/MembershipHealthPlans';

// GitHub Pages deployment fix
function App() {
  return (
    <div>
      <h1>CareSync Test</h1>
      <p>If you can see this, the app is working!</p>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/health-insurance-plans" element={<HealthInsurancePlans />} />
            <Route path="/medicare-consultation" element={<MedicareConsultation />} />
            <Route path="/membership-plans" element={<MembershipPlans />} />
            <Route path="/membership-health-plans" element={<MembershipHealthPlans />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
