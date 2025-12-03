import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import TipDetail from './components/TipDetail';
import Plan from './components/Plan';
import LandingPage from './components/LandingPage';
import { TIPS } from './data';
import { Menu, X } from 'lucide-react';

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <Sidebar 
        currentPath={location.pathname} 
        onNavigate={navigate} 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Mobile Header */}
        <header className="bg-white border-b border-slate-200 p-4 lg:hidden flex justify-between items-center z-10 shadow-sm">
          <div className="font-bold text-slate-800 text-lg">Tokio Marine AI</div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-50/50">
           <Outlet />
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Main App Routes wrapped in Layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Hero onStart={() => window.location.hash = '#/tip/1'} />} />
          
          {TIPS.map((tip) => (
            <Route 
              key={tip.id} 
              path={`/tip/${tip.id}`} 
              element={<TipDetail tip={tip} />} 
            />
          ))}
          
          <Route path="/tip/12" element={<Plan />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;