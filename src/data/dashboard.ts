export const dashboardData = {
  header: {
    briefDate: "Tuesday, Mar 17",
    generatedTime: "7:00 AM",
    coverageWindow: "Last 24h vs trailing 7d / 28d baselines",
    overallStatus: "Needs Attention" // Stable, Watch, Needs Attention
  },
  overallRead: {
    summaryText: "Stable overall, but 2 issues need attention today: one strategic client is showing rising service and finance risk, and one client has a business continuity issue that may require escalation.",
    ceoAttentionCount: 2,
    watchCount: 1
  },
  topIssues: [
    {
      id: "issue-1",
      rank: 1,
      title: "Client A moved to High Risk",
      severity: "High",
      domains: ["PSA", "Financial"],
      entityType: "Client",
      entityName: "Client A",
      whatChanged: "Backlog rose sharply, SLA fell, and one invoice is now 18 days overdue.",
      whyItMatters: "This is a strategic account and both service and cash signals are deteriorating.",
      recommendedNextStep: "Request same-day update from Service Manager and Finance.",
      needsCeoAttention: true,
      evidenceCount: 3
    },
    {
      id: "issue-2",
      rank: 2,
      title: "Critical backup failures for Client B",
      severity: "High",
      domains: ["RMM"],
      entityType: "Client",
      entityName: "Client B",
      whatChanged: "3 consecutive nights of backup failures on primary database server.",
      whyItMatters: "Business continuity risk is critical if a recovery is needed today.",
      recommendedNextStep: "Escalate to NOC lead for immediate remediation.",
      needsCeoAttention: true,
      evidenceCount: 1
    }
  ],
  customersToWatch: [
    {
      id: "client-a",
      clientName: "Client A",
      riskLevel: "High",
      riskChange: "Up", // Up, Flat, Down
      primaryDriver: "backlog + overdue AR",
      domains: ["PSA", "Financial"],
      needsCeoAttention: true,
      suggestedOwner: "Service Manager"
    },
    {
      id: "client-b",
      clientName: "Client B",
      riskLevel: "Medium",
      riskChange: "Up",
      primaryDriver: "backup failures",
      domains: ["RMM"],
      needsCeoAttention: false,
      suggestedOwner: "NOC Lead"
    },
    {
      id: "client-c",
      clientName: "Client C",
      riskLevel: "Medium",
      riskChange: "Flat",
      primaryDriver: "aging backlog",
      domains: ["PSA"],
      needsCeoAttention: false,
      suggestedOwner: "Service Manager"
    }
  ],
  serviceExceptions: [
    {
      id: "svc-1",
      exceptionTitle: "Backlog Spike",
      affectedTeam: "Tier 2 Support",
      affectedClientsCount: 4,
      severity: "Medium",
      changeVsBaseline: "+38% vs 28d",
      impactSummary: "May impact SLA attainment across multiple accounts if not cleared."
    }
  ],
  financialWatchItems: [
    {
      id: "fin-1",
      accountName: "Client A",
      issueType: "Overdue AR Risk",
      severity: "High",
      amountOrRatio: "$24,500",
      daysOverdue: 18,
      riskSummary: "Strategic account with growing overdue balance alongside service issues."
    }
  ],
  rmmExceptions: [
    {
      id: "rmm-1",
      clientName: "Client B",
      issueType: "Backup Failure Risk",
      severity: "High",
      assetScope: "Primary DB Server",
      businessImpactSummary: "Severe data loss risk if hardware fails today.",
      currentStatus: "Unresolved (3 days)"
    }
  ],
  recommendedActions: [
    {
      id: "act-1",
      actionText: "Ask Service Manager for same-day update on Client A backlog and SLA deterioration.",
      priority: "High",
      suggestedOwner: "Service Manager",
      linkedIssueId: "issue-1",
      reason: "Strategic account with compounding risks."
    },
    {
      id: "act-2",
      actionText: "Review AR status and collections plan for Client A.",
      priority: "Medium",
      suggestedOwner: "Finance Lead",
      linkedIssueId: "issue-1",
      reason: "Overdue balance is growing."
    },
    {
      id: "act-3",
      actionText: "Request incident summary for Client B backup failures before noon.",
      priority: "High",
      suggestedOwner: "NOC Lead",
      linkedIssueId: "issue-2",
      reason: "Critical business continuity risk."
    }
  ],
  footer: {
    dataSources: ["PSA", "Financial", "RMM"],
    lastRefreshTime: "6:55 AM",
    confidenceNote: "All signals verified."
  }
};
