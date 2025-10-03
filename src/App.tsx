import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import HealthInsurancePlans from './pages/HealthInsurancePlans';
import MedicareConsultation from './pages/MedicareConsultation';
import MembershipPlans from './pages/MembershipPlans';
import MembershipHealthPlans from './pages/MembershipHealthPlans';

function App() {
  return (
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
  );
}

export default App;
