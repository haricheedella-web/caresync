import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HealthInsurancePlans from './pages/HealthInsurancePlans';
import MedicareConsultation from './pages/MedicareConsultation';
import MembershipHealthPlans from './pages/MembershipHealthPlans';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/health-insurance" element={<HealthInsurancePlans />} />
          <Route path="/services/medicare-consultation" element={<MedicareConsultation />} />
          <Route path="/membership-health-plans" element={<MembershipHealthPlans />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
