import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import ProjectIdentitySection from './components/sections/ProjectIdentitySection';
import ProblemNeedSection from './components/sections/ProblemNeedSection';
import SolutionOverviewSection from './components/sections/SolutionOverviewSection';
import ShowcaseGallerySection from './components/sections/ShowcaseGallerySection';
import ResearchValidationSection from './components/sections/ResearchValidationSection';
import FuturePotentialSection from './components/sections/FuturePotentialSection';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectIdentitySection />
        <ProblemNeedSection />
        <SolutionOverviewSection />
        <ShowcaseGallerySection />
        <ResearchValidationSection />
        <FuturePotentialSection />
      </main>
    </div>
  );
}

export default App;
