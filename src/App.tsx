import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ResultsPortfolio from './components/ResultsPortfolio';
import Timeline from './components/Timeline';
import Comparison from './components/Comparison';
import PhoneShowcase from './components/PhoneShowcase';
import Pricing from './components/Pricing';
import TrialSection from './components/TrialSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-brand-dark font-sans text-gray-100 flex flex-col selection:bg-brand-gold selection:text-black">
      {/* Top sticky Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section with interactive Phone Player */}
        <Hero />

        {/* Dynamic Animated Statistics Counters */}
        <Stats />

        {/* Process Timeline steps */}
        <Timeline />

        {/* Client Results Showcase and Video Portfolio Switching Tab */}
        <ResultsPortfolio />

        {/* Common Editor vs LuzEdit Comparison Table */}
        <Comparison />

        {/* Interactive phone player carousel recreated */}
        <PhoneShowcase />

        {/* Pricing Tables and Currency toggle (BRL / USD) */}
        <Pricing />

        {/* Trial Request Brief Submission Form & Pipeline Simulation */}
        <TrialSection />

        {/* Interactive FAQ accordion */}
        <FAQ />
      </main>

      {/* Social links Footer & messaging block */}
      <Footer />
    </div>
  );
}

