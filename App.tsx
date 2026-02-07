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

// Home page component (main landing page)
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-accent selection:text-white">
      <Navigation />

      <main>
        <Hero />
        <SocialProof />
        <Methodology />
        <ProductPage />
        <ClinicalData />
      </main>

      <Footer />
      <ExitPopup />
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