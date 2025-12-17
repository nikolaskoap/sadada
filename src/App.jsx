import React from 'react';
import { AppShell } from './components/Layout/AppShell';
import Home from './components/Pages/Home';
import Roadmap from './components/Pages/Roadmap';
import Whitepaper from './components/Pages/Whitepaper';
import Team from './components/Pages/Team';
import Waitlist from './components/Pages/Waitlist';
import { ScrollReveal } from './components/UI/ScrollReveal';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Fungsi ini akan berjalan otomatis setelah web siap
    const timer = setTimeout(() => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.classList.add('loading-hidden'); // Menghilangkan layar hitam
      }
    }, 2000); // 2000 artinya layar loading muncul selama 2 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppShell>
       {/* Isi konten Anda tetap seperti di gambar ce1320 */}
    </AppShell>
  );
}

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
