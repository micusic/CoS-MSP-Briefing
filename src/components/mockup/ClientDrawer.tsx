import React from 'react';
import { X, Briefcase, DollarSign, Server, AlertTriangle, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ClientDrawerProps {
  client: any; // Using any for mockup simplicity
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientDrawer({ client, isOpen, onClose }: ClientDrawerProps) {
  if (!client && isOpen) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-rose-600 bg-rose-50 border-rose-100';
      case 'Medium': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'Low': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      default: return 'text-neutral-600 bg-neutral-50 border-neutral-100';
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-neutral-900/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col border-l border-neutral-200",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">Client 360</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {client && (
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Section C1 - Client Summary */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-neutral-900">{client.clientName}</h1>
                <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold border", getSeverityColor(client.riskLevel))}>
                  {client.riskLevel} Risk
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-neutral-500 mb-1">Account Type</p>
                  <p className="font-semibold text-neutral-900 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Strategic
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500 mb-1">Revenue Tier</p>
                  <p className="font-semibold text-neutral-900">Tier 1 ($12k MRR)</p>
                </div>
                <div>
                  <p className="text-neutral-500 mb-1">Account Owner</p>
                  <p className="font-semibold text-neutral-900">Sarah Jenkins</p>
                </div>
              </div>
            </section>

            {/* Section C2 - Why Risky Now */}
            <section className="bg-neutral-50 rounded-xl p-5 border border-neutral-200/60">
              <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">Why Risky Now</h3>
              <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                {client.clientName} is currently {client.riskLevel.toLowerCase()} risk due to {client.primaryDriver}.
              </p>
            </section>

            {/* Section C3 - Signals by Domain */}
            <section className="space-y-4">
              <h3 className="text-sm font-bold tracking-tight text-neutral-900">Signals by Domain</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border border-rose-200 bg-rose-50">
                  <div className="flex items-center gap-3">
                    <Briefcase size={18} className="text-rose-600" />
                    <span className="font-semibold text-rose-900 text-sm">PSA Risk</span>
                  </div>
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">High</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-amber-200 bg-amber-50">
                  <div className="flex items-center gap-3">
                    <DollarSign size={18} className="text-amber-600" />
                    <span className="font-semibold text-amber-900 text-sm">Financial Risk</span>
                  </div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Watch</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-emerald-200 bg-emerald-50">
                  <div className="flex items-center gap-3">
                    <Server size={18} className="text-emerald-600" />
                    <span className="font-semibold text-emerald-900 text-sm">RMM Risk</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Stable</span>
                </div>
              </div>
            </section>

            {/* Section C4 - Trend Summary */}
            <section className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/60 shadow-sm">
                <p className="text-xs text-neutral-500 mb-1">7d Risk Trend</p>
                <p className="text-lg font-bold text-rose-600 flex items-center gap-1">
                  Worsening
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/60 shadow-sm">
                <p className="text-xs text-neutral-500 mb-1">Worsening Days</p>
                <p className="text-lg font-bold text-neutral-900 flex items-center gap-1">
                  3 consecutive
                </p>
              </div>
            </section>

            {/* Section C5 - Open Issues */}
            <section className="space-y-4">
              <h3 className="text-sm font-bold tracking-tight text-neutral-900">Open Issues</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-neutral-200/60 shadow-sm hover:border-indigo-300 cursor-pointer transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-neutral-900 text-sm group-hover:text-indigo-600">Backlog Spike & SLA Drop</h4>
                    <span className="text-[10px] px-1.5 py-0.5 rounded uppercase font-bold text-rose-600 bg-rose-50 border border-rose-100">High</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-3">
                    <span className="text-neutral-500">PSA</span>
                    <span className="text-indigo-600 font-medium flex items-center gap-1">View details <ArrowRight size={12} /></span>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-neutral-200/60 shadow-sm hover:border-indigo-300 cursor-pointer transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-neutral-900 text-sm group-hover:text-indigo-600">Overdue AR &gt; 15 days</h4>
                    <span className="text-[10px] px-1.5 py-0.5 rounded uppercase font-bold text-amber-600 bg-amber-50 border border-amber-100">Medium</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-3">
                    <span className="text-neutral-500">Financial</span>
                    <span className="text-indigo-600 font-medium flex items-center gap-1">View details <ArrowRight size={12} /></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section C6 - Recommended Attention */}
            <section className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
              <h3 className="text-xs font-bold tracking-wider text-indigo-400 uppercase mb-3 flex items-center gap-2">
                <AlertTriangle size={14} /> Recommended Attention
              </h3>
              <p className="text-sm font-medium text-indigo-900 mb-4">
                Request same-day update from Service Manager and Finance.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-indigo-700">Owner:</span>
                <span className="text-indigo-600">Service Manager</span>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
