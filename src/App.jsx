import React, { useEffect } from 'react';
import AppShell from './components/UI/AppShell';
import Home from './components/Pages/Home';
import Roadmap from './components/Pages/Roadmap';
import Whitepaper from './components/Pages/Whitepaper';
import Team from './components/Pages/Team';
import Waitlist from './components/Pages/Waitlist';
import { ScrollReveal } from './components/UI/ScrollReveal';

function App() {
  // 1. Logika untuk menghilangkan Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.classList.add('loading-hidden'); 
      }
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  // 2. Konten Website (Hanya satu fungsi return)
  return (
    <AppShell>
      <section id="home">
        <ScrollReveal>
          <Home />
        </ScrollReveal>
      </section>

      <section id="roadmap">
        <ScrollReveal delay={0.1}>
          <Roadmap />
        </ScrollReveal>
      </section>

      <section id="whitepaper">
        <ScrollReveal delay={0.1}>
          <Whitepaper />
        </ScrollReveal>
      </section>

      <section id="team">
        <ScrollReveal delay={0.1}>
          <Team />
        </ScrollReveal>
      </section>

      <section id="waitlist">
        <ScrollReveal delay={0.1}>
          <Waitlist />
        </ScrollReveal>
      </section>
    </AppShell>
  );
}

export default App;
