import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/who-we-are/AboutUs';
import OurTeam from './pages/who-we-are/OurTeam';
import BoardOfTrustees from './pages/who-we-are/BoardOfTrustees';
import WhereWeWork from './pages/who-we-are/WhereWeWork';
import OurAchivements from './pages/Our Achivements';
import EmergencySection from './pages/EmergencySection';
import GBVFacts from './pages/GBVFacts';
import CommunityOutreach from './pages/news/CommunityOutreach';
import Outreach from './pages/news/Outreach';
import Empowerment from './pages/news/Empowerment';
import GetSupport from './pages/GetSupport';
import ScrollToTop from './components/ScrollToTop';
import LawEnforcement from './pages/blogs/LawEnforcement';
import CommunityMobilization from './pages/blogs/CommunityMobilization';
import HealthcareIntegration from './pages/blogs/HealthcareIntegration';
import CulturalEngagement from './pages/blogs/CulturalEngagement';
import NetworkPage from './pages/news/NetworkPage';
import ResourcesSection from './components/ResourcesSection';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are/about" element={<AboutUs />} />
            <Route path="/who-we-are/team" element={<OurTeam />} />
            <Route path="/who-we-are/board" element={<BoardOfTrustees />} />
            <Route path="/who-we-are/locations" element={<WhereWeWork />} />
            <Route path="/who-we-are/Achievements" element={<OurAchivements />} />
            <Route path="/emergency" element={<EmergencySection />} />
            <Route path="/gbv-facts" element={<GBVFacts />} />
            <Route path="/news/community-outreach" element={<CommunityOutreach />} />
            <Route path="/news/outreach" element={<Outreach />} />
            <Route path="/news/empowerment" element={<Empowerment />} />
            <Route path="/news/network" element={<NetworkPage />} />
            <Route path="/get-support" element={<GetSupport />} />
            <Route path="/resources" element={<Resources />} />
            
            <Route path="/blogs">
              <Route path="law-enforcement" element={<LawEnforcement />} />
              <Route path="community-mobilization" element={<CommunityMobilization />} />
              <Route path="healthcare-integration" element={<HealthcareIntegration />} />
              <Route path="cultural-engagement" element={<CulturalEngagement />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
