import React from 'react';
import { ArrowLeft, Briefcase, DollarSign, Server, AlertTriangle, Activity } from 'lucide-react';
import { cn } from '../../lib/utils';

interface IssueDetailProps {
  issue: any; // Using any for mockup simplicity, ideally type it
  onBack: () => void;
  onOpenClient: (id: string) => void;
}

export default function IssueDetail({ issue, onBack, onOpenClient }: IssueDetailProps) {
  if (!issue) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-rose-600 bg-rose-50 border-rose-100';
      case 'Medium': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'Low': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      default: return 'text-neutral-600 bg-neutral-50 border-neutral-100';
    }
  };

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'PSA': return <Briefcase size={14} className="mr-1" />;
      case 'Financial': return <DollarSign size={14} className="mr-1" />;
      case 'RMM': return <Server size={14} className="mr-1" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-10 space-y-8 pb-20 bg-white min-h-full shadow-sm">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Brief
      </button>

      {/* Section B1 - Issue Header */}
      <header className="space-y-4 pb-6 border-b border-neutral-200">
        <div className="flex flex-wrap items-center gap-3">
          <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold border", getSeverityColor(issue.severity))}>
            {issue.severity}
          </span>
          {issue.domains.map((domain: string) => (
            <span key={domain} className="flex items-center text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md">
              {getDomainIcon(domain)} {domain}
            </span>
          ))}
          {issue.needsCeoAttention && (
            <span className="flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
              <AlertTriangle size={14} /> CEO Attention
            </span>
          )}
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          {issue.title}
        </h1>
        
        <div className="flex items-center gap-2 text-sm">
          <span className="text-neutral-500">Entity:</span>
          <button 
            onClick={() => onOpenClient(issue.id)}
            className="font-semibold text-indigo-600 hover:text-indigo-800 underline underline-offset-2"
          >
            {issue.entityName}
          </button>
          <span className="text-neutral-300 mx-2">|</span>
          <span className="text-neutral-500">Last updated: 10 mins ago</span>
        </div>
      </header>

      {/* Section B2 - Executive Summary */}
      <section className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/60">
        <h2 className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">Executive Summary</h2>
        <p className="text-lg text-neutral-800 leading-relaxed font-medium">
          {issue.entityName} is showing rising risk because {issue.whatChanged.toLowerCase()} {issue.whyItMatters}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section B3 - Why Flagged */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight text-neutral-900">Why Flagged</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-neutral-700">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              <span>Open ticket backlog rose 38% above 28-day baseline.</span>
            </li>
            <li className="flex items-start gap-3 text-neutral-700">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              <span>SLA attainment dropped below target.</span>
            </li>
            <li className="flex items-start gap-3 text-neutral-700">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              <span>One invoice is now 18 days overdue.</span>
            </li>
            <li className="flex items-start gap-3 text-neutral-700">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              <span>Account is marked strategic.</span>
            </li>
          </ul>
        </section>

        {/* Section B4 - Impact Summary */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight text-neutral-900">Impact Summary</h2>
          <div className="bg-white rounded-xl p-5 border border-neutral-200/60 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-8 bg-rose-500 rounded-full" />
              <div>
                <p className="text-sm font-bold text-neutral-900">Client Risk</p>
                <p className="text-xs text-neutral-500">High probability of dissatisfaction</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-8 bg-amber-500 rounded-full" />
              <div>
                <p className="text-sm font-bold text-neutral-900">Revenue / Cash Risk</p>
                <p className="text-xs text-neutral-500">Short-term collections delayed</p>
              </div>
            </div>
            <p className="text-sm text-neutral-700 pt-2 border-t border-neutral-100">
              This issue may affect client satisfaction, renewal confidence, and short-term collections if not addressed today.
            </p>
          </div>
        </section>
      </div>

      {/* Section B5 - Recommended Next Step */}
      <section className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
        <h2 className="text-xs font-bold tracking-wider text-indigo-400 uppercase mb-3">Recommended Next Step</h2>
        <p className="text-lg font-medium text-indigo-900 mb-4">
          {issue.recommendedNextStep}
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-semibold text-indigo-700">Suggested Owner: Service Manager</span>
          {issue.needsCeoAttention && (
            <span className="flex items-center gap-1 font-bold text-rose-600 bg-white px-2 py-1 rounded-md shadow-sm">
              <AlertTriangle size={14} /> CEO Attention Recommended
            </span>
          )}
        </div>
      </section>

      {/* Section B6 - Evidence by Domain */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-neutral-900">Evidence by Domain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {issue.domains.includes('PSA') && (
            <div className="bg-white rounded-xl p-5 border border-neutral-200/60 shadow-sm">
              <h3 className="text-sm font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-2 mb-4">
                <Briefcase size={16} /> PSA Signals
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Current Open Tickets</p>
                  <p className="text-xl font-bold text-neutral-900">42</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Backlog vs 28d</p>
                  <p className="text-xl font-bold text-rose-600">+38%</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">SLA Attainment</p>
                  <p className="text-xl font-bold text-amber-600">82%</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Aged &gt; 7d</p>
                  <p className="text-xl font-bold text-neutral-900">14</p>
                </div>
              </div>
            </div>
          )}
          
          {issue.domains.includes('Financial') && (
            <div className="bg-white rounded-xl p-5 border border-neutral-200/60 shadow-sm">
              <h3 className="text-sm font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-2 mb-4">
                <DollarSign size={16} /> Financial Signals
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Overdue Amount</p>
                  <p className="text-xl font-bold text-rose-600">$24,500</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Days Overdue</p>
                  <p className="text-xl font-bold text-rose-600">18</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Overdue Invoices</p>
                  <p className="text-xl font-bold text-neutral-900">1</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Account MRR</p>
                  <p className="text-xl font-bold text-neutral-900">$12,000</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section B7 - Trend Section */}
      <section className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200/60">
        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
          <Activity size={20} />
        </div>
        <div>
          <p className="text-sm font-bold text-neutral-900">Worsening Trend</p>
          <p className="text-xs text-neutral-600">Risk has worsened for 3 consecutive days across multiple domains.</p>
        </div>
      </section>
    </div>
  );
}
