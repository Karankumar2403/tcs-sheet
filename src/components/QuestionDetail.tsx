import React, { useState, useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';
import type { Question } from '../data/questions';


interface QuestionDetailProps {
  question: Question;
  notes: string;
  onNotesChange: (id: number, notes: string) => void;
  onClose: () => void;
}

export const QuestionDetail: React.FC<QuestionDetailProps> = ({
  question,
  notes,
  onNotesChange,
  onClose,
}) => {
  const [activeApproach, setActiveApproach] = useState<'optimal' | 'brute'>('optimal');
  const [activeLang, setActiveLang] = useState<'cpp' | 'java' | 'python'>('cpp');
  const [copied, setCopied] = useState(false);

  // Reset language and approach selections when question changes
  useEffect(() => {
    setActiveApproach('optimal');
    setActiveLang('cpp');
    setCopied(false);
  }, [question]);

  const approachData = activeApproach === 'optimal' 
    ? question.approaches.optimal 
    : question.approaches.brute;

  const currentCode = approachData.code[activeLang] || "// Code solution not available";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="glass-panel detail-card">
      {/* Header */}
      <div className="detail-header">
        <div className="detail-header-left">
          <div className="detail-header-meta">
            <span className="category-tag">{question.category}</span>
            <span className={`badge ${question.difficulty.toLowerCase()}`}>{question.difficulty}</span>
          </div>
          <h2>{question.title}</h2>
        </div>
        <button className="btn-close" onClick={onClose} aria-label="Close details" title="Close Details">
          <X size={20} />
        </button>
      </div>

      {/* Problem Statement */}
      <div className="detail-section">
        <h3 className="detail-section-title">Problem Statement</h3>
        <p className="problem-statement-text">{question.problemStatement}</p>
      </div>

      {/* Examples */}
      <div className="detail-section">
        <h3 className="detail-section-title">Example</h3>
        <div className="example-box">
          <div>
            <span className="example-label">Input: </span>
            <span className="example-val">{question.input}</span>
          </div>
          <div>
            <span className="example-label">Output: </span>
            <span className="example-val">{question.output}</span>
          </div>
          {question.explanation && (
            <div style={{ marginTop: '0.25rem', fontSize: '0.875rem' }}>
              <span className="example-label">Explanation: </span>
              <span style={{ color: 'var(--text-secondary)' }}>{question.explanation}</span>
            </div>
          )}
        </div>
      </div>

      {/* Approach Toggles */}
      <div className="detail-section">
        <h3 className="detail-section-title">Solution Approaches</h3>
        <div className="approach-tabs">
          <button
            className={`approach-tab-btn ${activeApproach === 'optimal' ? 'active' : ''}`}
            onClick={() => setActiveApproach('optimal')}
          >
            Optimal Approach
          </button>
          <button
            className={`approach-tab-btn ${activeApproach === 'brute' ? 'active' : ''}`}
            onClick={() => setActiveApproach('brute')}
          >
            Brute Force
          </button>
        </div>

        {/* Complexity Metadata */}
        <div className="approach-meta-grid">
          <div className="approach-meta-box">
            <span className="approach-meta-label">Time Complexity</span>
            <span className="approach-meta-value">{approachData.timeComplexity}</span>
          </div>
          <div className="approach-meta-box">
            <span className="approach-meta-label">Space Complexity</span>
            <span className="approach-meta-value">{approachData.spaceComplexity}</span>
          </div>
        </div>

        <p className="problem-statement-text" style={{ marginBottom: '1.25rem' }}>
          <strong>Description: </strong>{approachData.description}
        </p>
      </div>

      {/* Code Editor Playground */}
      <div className="detail-section">
        <div className="code-playground">
          <div className="code-header">
            <div className="code-tabs">
              <button
                className={`code-tab-btn ${activeLang === 'cpp' ? 'active' : ''}`}
                onClick={() => setActiveLang('cpp')}
              >
                C++
              </button>
              <button
                className={`code-tab-btn ${activeLang === 'java' ? 'active' : ''}`}
                onClick={() => setActiveLang('java')}
              >
                Java
              </button>
              <button
                className={`code-tab-btn ${activeLang === 'python' ? 'active' : ''}`}
                onClick={() => setActiveLang('python')}
              >
                Python
              </button>
            </div>
            <button className="btn-copy" onClick={handleCopy} title="Copy code to clipboard">
              {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
            </button>
          </div>
          <div className="code-body">
            <pre>
              <code>{currentCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Personal Notes */}
      <div className="detail-section">
        <h3 className="detail-section-title">Personal Study Notes</h3>
        <textarea
          className="notes-textarea"
          placeholder="Add key insights, patterns, or formulas for this question..."
          value={notes}
          onChange={(e) => onNotesChange(question.id, e.target.value)}
        />
      </div>
    </div>
  );
};
