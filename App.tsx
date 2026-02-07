import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Methodology from './components/Methodology';
import ProductPage from './components/ProductPage';
import ClinicalData from './components/ClinicalData';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';
import KnowledgeBasePage from './pages/KnowledgeBasePage';

import LeadModal from './components/LeadModal';

// Home page component (main landing page)
const HomePage: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);

  const handleOpenLeadModal = () => {
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-accent selection:text-white">
      <Navigation onOpenAssessment={handleOpenLeadModal} />

      <main>
        <Hero onOpenAssessment={handleOpenLeadModal} />
        <SocialProof />
        <Methodology />
        <ProductPage />
        <ClinicalData />
      </main>

      <Footer />
      <ExitPopup />
      <LeadModal isOpen={isLeadModalOpen} onClose={handleCloseLeadModal} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;