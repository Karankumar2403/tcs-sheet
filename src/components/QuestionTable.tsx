import React from 'react';
import { Star, HelpCircle } from 'lucide-react';
import type { Question } from '../data/questions';
import type { TrackerState } from '../utils/storage';


interface QuestionTableProps {
  questions: Question[];
  trackerState: TrackerState;
  onStatusChange: (id: number, status: 'unsolved' | 'in-progress' | 'completed') => void;
  onFavoriteToggle: (id: number) => void;
  onQuestionSelect: (question: Question) => void;
  selectedQuestionId?: number;
}

export const QuestionTable: React.FC<QuestionTableProps> = ({
  questions,
  trackerState,
  onStatusChange,
  onFavoriteToggle,
  onQuestionSelect,
  selectedQuestionId,
}) => {
  if (questions.length === 0) {
    return (
      <div className="glass-panel empty-state">
        <HelpCircle size={48} />
        <h3>No Questions Found</h3>
        <p>Try refining your search terms or filters.</p>
      </div>
    );
  }

  return (
    <div className="glass-panel table-wrapper">
      <table className="question-table">
        <thead>
          <tr>
            <th className="col-id" style={{ width: '60px', textAlign: 'center' }}>#</th>
            <th className="col-status" style={{ width: '180px' }}>Status</th>
            <th className="col-title">Title</th>
            <th className="col-topic" style={{ width: '150px' }}>Topic</th>
            <th className="col-difficulty" style={{ width: '120px' }}>Difficulty</th>
            <th className="col-fav" style={{ width: '60px', textAlign: 'center' }}>★</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => {
            const status = trackerState.status[q.id] || 'unsolved';
            const isFav = !!trackerState.favorites[q.id];
            const isSelected = selectedQuestionId === q.id;

            return (
              <tr
                key={q.id}
                className={`question-row ${status === 'completed' ? 'completed-row' : ''} ${isSelected ? 'selected-row' : ''}`}
                onClick={() => onQuestionSelect(q)}
              >
                {/* ID Column */}
                <td className="col-id" style={{ textAlign: 'center', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  {q.id}
                </td>

                {/* Status Column */}
                <td className="col-status" onClick={(e) => e.stopPropagation()}>
                  <div className="status-cell-wrapper">
                    <span className={`status-dot ${status}`} />
                    <select
                      className="status-dropdown"
                      value={status}
                      onChange={(e) => onStatusChange(q.id, e.target.value as any)}
                      title="Update completion status"
                    >
                      <option value="unsolved">Unsolved</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </td>

                {/* Title Column */}
                <td className="col-title">
                  <div className="title-cell-content">
                    <span className="question-title-text">{q.title}</span>
                    <div className="mobile-meta">
                      <span className="category-tag">{q.category}</span>
                      <span className={`badge ${q.difficulty.toLowerCase()}`}>{q.difficulty}</span>
                    </div>
                  </div>
                </td>

                {/* Category Column */}
                <td className="col-topic">
                  <span className="category-tag">{q.category}</span>
                </td>

                {/* Difficulty Column */}
                <td className="col-difficulty">
                  <span className={`badge ${q.difficulty.toLowerCase()}`}>
                    {q.difficulty}
                  </span>
                </td>

                {/* Favorite Column */}
                <td className="col-fav" style={{ textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
                  <button
                    className={`fav-btn ${isFav ? 'active' : ''}`}
                    onClick={() => onFavoriteToggle(q.id)}
                    title={isFav ? "Remove from Bookmarks" : "Add to Bookmarks"}
                  >
                    <Star size={18} fill={isFav ? "currentColor" : "none"} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
