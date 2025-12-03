import React from 'react';
import { 
  Users, Calendar, Megaphone, Feather, Building2, Send, 
  Search, RefreshCw, Bot, Zap, Award, Target, Home, 
  ChevronRight, BarChart3
} from 'lucide-react';
import { TIPS } from '../data';
import { TipCategory } from '../types';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Users, Calendar, Megaphone, Feather, Building2, Send, 
  Search, RefreshCw, Bot, Zap, Award, Target
};

const Sidebar: React.FC<SidebarProps> = ({ currentPath, onNavigate, isOpen, setIsOpen }) => {
  const categories = [
    TipCategory.ATTRACTION_INBOUND,
    TipCategory.ATTRACTION_OUTBOUND,
    TipCategory.CONVERSION,
    TipCategory.BONUS
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  // Determine if we are on dashboard or a tip
  const isDashboard = currentPath === '/dashboard';

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-72 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col h-full border-r border-slate-800
      `}>
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950">
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            UPClass Especial
          </h1>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Impulsione com IA 2026</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-6">
            <button
              onClick={() => handleNav('/dashboard')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                isDashboard
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Home size={18} className="mr-3" />
              <span className="font-medium">Visão Geral</span>
            </button>
          </div>

          {categories.map((cat) => (
            <div key={cat} className="mb-6 px-4">
              <h3 className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {cat}
              </h3>
              <div className="space-y-1">
                {TIPS.filter(t => t.category === cat).map((tip) => {
                  const Icon = iconMap[tip.iconName] || ChevronRight;
                  const isActive = currentPath === `/tip/${tip.id}`;
                  
                  return (
                    <button
                      key={tip.id}
                      onClick={() => handleNav(`/tip/${tip.id}`)}
                      className={`w-full flex items-center px-4 py-2 text-sm rounded-lg transition-all ${
                        isActive 
                          ? 'bg-slate-800 text-emerald-400 border-l-2 border-emerald-400' 
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                      }`}
                    >
                      <Icon size={16} className={`mr-3 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span className="truncate">{tip.id}. {tip.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-center">
           <div className="flex items-center justify-center text-xs text-slate-500">
              <BarChart3 size={12} className="mr-1" />
              <span>Dashboard Corretor 2.0</span>
           </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
