import React from 'react';
import { AppShell } from './components/Layout/AppShell';
import Home from './components/Pages/Home';
import Roadmap from './components/Pages/Roadmap';
import Whitepaper from './components/Pages/Whitepaper';
import Team from './components/Pages/Team';
import Waitlist from './components/Pages/Waitlist';
import { ScrollReveal } from './components/UI/ScrollReveal';

function App() {
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
