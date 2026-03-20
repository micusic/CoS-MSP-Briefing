import React, { useState } from 'react';
import { LayoutDashboard, FileText, Menu, X } from 'lucide-react';
import { cn } from './lib/utils';
import MockupPage from './pages/Mockup';
import PRDPage from './pages/PRD';

export default function App() {
  const [activeTab, setActiveTab] = useState<'mockup' | 'prd'>('mockup');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'mockup', label: 'Dashboard Mockup', icon: LayoutDashboard },
    { id: 'prd', label: 'PRD Document', icon: FileText },
  ];

  return (
    <div className="flex h-screen bg-neutral-100 overflow-hidden font-sans text-neutral-900">
      {/* Mobile sidebar toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-sm border border-neutral-200"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-neutral-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-neutral-100">
            <h1 className="text-xl font-semibold tracking-tight text-neutral-900">AI Chief of Staff</h1>
            <p className="text-xs text-neutral-500 mt-1">Executive Signals Brief</p>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as 'mockup' | 'prd');
                    setIsSidebarOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  )}
                >
                  <Icon size={18} className={isActive ? "text-indigo-600" : "text-neutral-400"} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto w-full">
        {activeTab === 'mockup' ? <MockupPage /> : <PRDPage />}
      </main>
    </div>
  );
}
