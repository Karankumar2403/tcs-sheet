import React from 'react';
import type { Question } from '../data/questions';
import type { TrackerState } from '../utils/storage';

interface StatsDashboardProps {
  questions: Question[];
  trackerState: TrackerState;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ questions, trackerState }) => {
  const total = questions.length;
  
  // Calculate status counts
  let completed = 0;
  let inProgress = 0;
  questions.forEach(q => {
    const status = trackerState.status[q.id] || 'unsolved';
    if (status === 'completed') completed++;
    else if (status === 'in-progress') inProgress++;
  });
  const unsolved = total - completed - inProgress;
  
  // Calculate percentage
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  // Group by category progress
  const categories: ("Arrays" | "Numbers" | "Number System" | "Sorting" | "Strings")[] = [
    "Arrays", "Numbers", "Number System", "Sorting", "Strings"
  ];
  
  const categoryStats = categories.map(cat => {
    const catQuestions = questions.filter(q => q.category === cat);
    const catTotal = catQuestions.length;
    const catCompleted = catQuestions.filter(q => (trackerState.status[q.id] || 'unsolved') === 'completed').length;
    const catPercent = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;
    return { name: cat, completed: catCompleted, total: catTotal, percent: catPercent };
  });

  // SVG Circle variables
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="dashboard-grid">
      {/* Overall Progress Panel */}
      <div className="glass-panel stats-card">
        <div className="stats-info">
          <div className="stats-header">
            <h2>Preparation Progress</h2>
            <p>Mastering TCS NQT coding questions systematically</p>
          </div>
          
          <div className="stats-metrics">
            <div className="metric-box completed">
              <span className="metric-value" style={{ color: 'var(--status-completed)' }}>{completed}</span>
              <span className="metric-label">Solved</span>
            </div>
            <div className="metric-box inprogress">
              <span className="metric-value" style={{ color: 'var(--status-inprogress)' }}>{inProgress}</span>
              <span className="metric-label">In Progress</span>
            </div>
            <div className="metric-box unsolved">
              <span className="metric-value" style={{ color: 'var(--status-unsolved)' }}>{unsolved}</span>
              <span className="metric-label">Unsolved</span>
            </div>
          </div>
        </div>

        {/* Circular gauge */}
        <div className="circular-progress">
          <svg className="progress-svg">
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-primary)" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <circle className="progress-bg-circle" cx="70" cy="70" r={radius} />
            <circle
              className="progress-bar-circle"
              cx="70"
              cy="70"
              r={radius}
              stroke="url(#progressGradient)"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="progress-text-center">
            <span className="progress-percent">{percent}%</span>
            <span className="progress-subtext">Completed</span>
          </div>
        </div>
      </div>

      {/* Category Progress Checklist */}
      <div className="glass-panel category-progress-card">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.5rem' }}>Topic wise Progress</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1, justifyContent: 'center' }}>
          {categoryStats.map(cat => (
            <div key={cat.name} className="category-row">
              <div className="category-meta">
                <span className="category-name">{cat.name}</span>
                <span className="category-count">{cat.completed}/{cat.total} ({cat.percent}%)</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${cat.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
