import React, { useEffect } from 'react';
// Gunakan kurung kurawal jika export di AppShell tidak pakai 'default'
import { AppShell } from './components/Layout/AppShell'; 
import Home from './components/Pages/Home';
// ... rest of the code
import Roadmap from './components/Pages/Roadmap';
import Whitepaper from './components/Pages/Whitepaper';
import Team from './components/Pages/Team';
import Waitlist from './components/Pages/Waitlist';
import { ScrollReveal } from './components/UI/ScrollReveal';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.classList.add('loading-hidden'); 
      }
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppShell>
      {/* Konten website Anda */}
      <section id="home">
        <ScrollReveal>
          <Home />
        </ScrollReveal>
      </section>
      {/* ... tambahkan section lainnya sesuai kebutuhan ... */}
    </AppShell>
  );
}

export default App;
