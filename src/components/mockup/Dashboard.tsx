import React from 'react';
import { dashboardData } from '../../data/dashboard';
import { cn } from '../../lib/utils';
import { 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowRight, 
  Activity, 
  Briefcase, 
  Server, 
  DollarSign,
  ChevronRight,
  Clock,
  ShieldAlert
} from 'lucide-react';

interface DashboardProps {
  onOpenIssue: (id: string) => void;
  onOpenClient: (id: string) => void;
}

export default function Dashboard({ onOpenIssue, onOpenClient }: DashboardProps) {
  const { 
    header, 
    overallRead, 
    topIssues, 
    customersToWatch, 
    serviceExceptions, 
    financialWatchItems, 
    rmmExceptions, 
    recommendedActions, 
    footer 
  } = dashboardData;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Needs Attention': return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'Watch': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Stable': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

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
      default: return <Activity size={14} className="mr-1" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-10 space-y-8 pb-20">
      {/* Section A1 - Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Executive Signals Brief</h1>
          <div className="flex items-center gap-3 mt-2 text-sm text-neutral-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock size={16} />
              {header.briefDate}
            </span>
            <span>•</span>
            <span>Generated at {header.generatedTime}</span>
            <span>•</span>
            <span>Coverage: {header.coverageWindow}</span>
          </div>
        </div>
        <div className={cn("px-4 py-1.5 rounded-full border font-semibold text-sm flex items-center gap-2 shadow-sm", getStatusColor(header.overallStatus))}>
          <Activity size={16} />
          Status: {header.overallStatus}
        </div>
      </header>

      {/* Section A2 - Overall Read */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/60">
        <h2 className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">Overall Read</h2>
        <p className="text-lg text-neutral-800 leading-relaxed font-medium">
          {overallRead.summaryText}
        </p>
      </section>

      {/* Section A3 - Top Issues Today */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">Top Issues Today</h2>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            View all flagged issues <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topIssues.map((issue) => (
            <div 
              key={issue.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/60 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group flex flex-col"
              onClick={() => onOpenIssue(issue.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold">
                    {issue.rank}
                  </span>
                  <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold border", getSeverityColor(issue.severity))}>
                    {issue.severity}
                  </span>
                </div>
                {issue.needsCeoAttention && (
                  <span className="flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
                    <AlertTriangle size={14} /> CEO Attention
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {issue.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {issue.domains.map(domain => (
                  <span key={domain} className="flex items-center text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md">
                    {getDomainIcon(domain)} {domain}
                  </span>
                ))}
                <span 
                  className="flex items-center text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md hover:bg-indigo-100 cursor-pointer transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenClient(issue.id); // Using issue id as client id for mockup simplicity
                  }}
                >
                  {issue.entityType}: {issue.entityName}
                </span>
              </div>
              
              <div className="space-y-3 text-sm flex-1">
                <div>
                  <span className="font-semibold text-neutral-900">What changed: </span>
                  <span className="text-neutral-600">{issue.whatChanged}</span>
                </div>
                <div>
                  <span className="font-semibold text-neutral-900">Why it matters: </span>
                  <span className="text-neutral-600">{issue.whyItMatters}</span>
                </div>
              </div>
              
              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-semibold text-neutral-900">Next step: </span>
                  <span className="text-neutral-600">{issue.recommendedNextStep}</span>
                </div>
                <ChevronRight size={20} className="text-neutral-400 group-hover:text-indigo-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section A4 - Customers to Watch */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-neutral-900">Customers to Watch</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/60 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-neutral-50 text-neutral-500 font-medium border-b border-neutral-200/60">
              <tr>
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3">Risk</th>
                <th className="px-6 py-3">Change</th>
                <th className="px-6 py-3">Main Driver</th>
                <th className="px-6 py-3">Domains</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {customersToWatch.map((client) => (
                <tr 
                  key={client.id} 
                  className="hover:bg-neutral-50 cursor-pointer transition-colors"
                  onClick={() => onOpenClient(client.id)}
                >
                  <td className="px-6 py-4 font-semibold text-neutral-900">{client.clientName}</td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2 py-1 rounded-md text-xs font-semibold border", getSeverityColor(client.riskLevel))}>
                      {client.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {client.riskChange === 'Up' && <span className="text-rose-600 font-bold flex items-center gap-1"><ArrowUpRight size={16} /> Up</span>}
                    {client.riskChange === 'Flat' && <span className="text-neutral-500 font-medium">Flat</span>}
                    {client.riskChange === 'Down' && <span className="text-emerald-600 font-medium">Down</span>}
                  </td>
                  <td className="px-6 py-4 text-neutral-600">{client.primaryDriver}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {client.domains.map(d => (
                        <span key={d} className="text-xs bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">{d}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-xs">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Domain Specific Exceptions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section A5 - Service Delivery */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-2">
            <Briefcase size={16} /> Service Delivery Exceptions
          </h3>
          <div className="space-y-3">
            {serviceExceptions.map(exc => (
              <div key={exc.id} className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-neutral-900 text-sm">{exc.exceptionTitle}</h4>
                  <span className={cn("text-[10px] px-1.5 py-0.5 rounded uppercase font-bold", getSeverityColor(exc.severity))}>
                    {exc.severity}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mb-3">{exc.impactSummary}</p>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-neutral-500">{exc.affectedTeam}</span>
                  <span className="text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">{exc.changeVsBaseline}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section A6 - Financial */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-2">
            <DollarSign size={16} /> Financial Watch Items
          </h3>
          <div className="space-y-3">
            {financialWatchItems.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-neutral-900 text-sm">{item.issueType}</h4>
                  <span className={cn("text-[10px] px-1.5 py-0.5 rounded uppercase font-bold", getSeverityColor(item.severity))}>
                    {item.severity}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mb-3">{item.riskSummary}</p>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded cursor-pointer hover:bg-indigo-100" onClick={() => onOpenClient(item.accountName)}>
                    {item.accountName}
                  </span>
                  <span className="text-rose-600 font-bold">{item.amountOrRatio} ({item.daysOverdue}d)</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section A7 - RMM */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-2">
            <Server size={16} /> RMM / Resilience Exceptions
          </h3>
          <div className="space-y-3">
            {rmmExceptions.map(exc => (
              <div key={exc.id} className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-neutral-900 text-sm">{exc.issueType}</h4>
                  <span className={cn("text-[10px] px-1.5 py-0.5 rounded uppercase font-bold", getSeverityColor(exc.severity))}>
                    {exc.severity}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mb-3">{exc.businessImpactSummary}</p>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded cursor-pointer hover:bg-indigo-100" onClick={() => onOpenClient(exc.clientName)}>
                    {exc.clientName}
                  </span>
                  <span className="text-neutral-500">{exc.assetScope}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Section A8 - Recommended Actions */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-neutral-900">Recommended Actions</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/60 p-1">
          <ul className="divide-y divide-neutral-100">
            {recommendedActions.map((action) => (
              <li key={action.id} className="p-4 hover:bg-neutral-50 transition-colors rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <div className="w-5 h-5 rounded-full border-2 border-indigo-200 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900 leading-snug">{action.actionText}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-neutral-500">
                      <span className="font-medium text-indigo-600">{action.suggestedOwner}</span>
                      <span>•</span>
                      <button 
                        onClick={() => onOpenIssue(action.linkedIssueId)}
                        className="hover:text-indigo-600 underline underline-offset-2"
                      >
                        View related issue
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section A9 - Footer */}
      <footer className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium">
        <div className="flex gap-4">
          <span>Sources: {footer.dataSources.join(', ')}</span>
          <span>•</span>
          <span>Last refreshed: {footer.lastRefreshTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldAlert size={14} className="text-emerald-500" />
          <span>{footer.confidenceNote}</span>
        </div>
      </footer>
    </div>
  );
}
