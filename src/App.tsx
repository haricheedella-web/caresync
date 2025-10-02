import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MembershipPlans from './pages/MembershipPlans';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership-plans" element={<MembershipPlans />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
