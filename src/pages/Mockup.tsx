import React, { useState } from 'react';
import Dashboard from '../components/mockup/Dashboard';
import IssueDetail from '../components/mockup/IssueDetail';
import ClientDrawer from '../components/mockup/ClientDrawer';
import { dashboardData } from '../data/dashboard';

export default function MockupPage() {
  const [view, setView] = useState<'dashboard' | 'issue-detail'>('dashboard');
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);
  const [drawerClientId, setDrawerClientId] = useState<string | null>(null);

  const handleOpenIssue = (id: string) => {
    setSelectedIssueId(id);
    setView('issue-detail');
  };

  const handleBackToDashboard = () => {
    setView('dashboard');
    setSelectedIssueId(null);
  };

  const handleOpenClient = (id: string) => {
    setDrawerClientId(id);
  };

  const handleCloseClient = () => {
    setDrawerClientId(null);
  };

  const selectedIssue = dashboardData.topIssues.find(i => i.id === selectedIssueId);
  const selectedClient = dashboardData.customersToWatch.find(c => c.id === drawerClientId);

  return (
    <div className="relative min-h-full bg-neutral-50/50">
      {view === 'dashboard' ? (
        <Dashboard 
          onOpenIssue={handleOpenIssue} 
          onOpenClient={handleOpenClient} 
        />
      ) : (
        <IssueDetail 
          issue={selectedIssue} 
          onBack={handleBackToDashboard} 
          onOpenClient={handleOpenClient} 
        />
      )}

      <ClientDrawer 
        client={selectedClient} 
        isOpen={!!drawerClientId} 
        onClose={handleCloseClient} 
      />
    </div>
  );
}
