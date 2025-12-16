import React, { useState } from 'react';
import { AppShell } from './components/Layout/AppShell';
import Home from './components/Pages/Home';
import Roadmap from './components/Pages/Roadmap';
import Whitepaper from './components/Pages/Whitepaper';
import Team from './components/Pages/Team';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'roadmap': return <Roadmap />;
      case 'whitepaper': return <Whitepaper />;
      case 'team': return <Team />;
      default: return <Home />;
    }
  };

  return (
    <AppShell activeTab={activeTab} onNavigate={setActiveTab}>
      {renderContent()}
    </AppShell>
  );
}

export default App;
