import React, { useState } from 'react';
import { questions } from './data/questions';
import { loadTrackerState, saveTrackerState } from './utils/storage';
import type { TrackerState } from './utils/storage';
import { ThemeToggle } from './components/ThemeToggle';
import { StatsDashboard } from './components/StatsDashboard';
import { Filters } from './components/Filters';
import { QuestionTable } from './components/QuestionTable';
import { QuestionDetail } from './components/QuestionDetail';
import { BookOpen } from 'lucide-react';

export const App: React.FC = () => {
  const [trackerState, setTrackerState] = useState<TrackerState>(() => loadTrackerState());
  const [selectedQuestion, setSelectedQuestion] = useState<typeof questions[0] | null>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Change handlers
  const handleStatusChange = (id: number, status: 'unsolved' | 'in-progress' | 'completed') => {
    setTrackerState(prev => {
      const next = {
        ...prev,
        status: { ...prev.status, [id]: status }
      };
      saveTrackerState(next);
      return next;
    });
  };

  const handleFavoriteToggle = (id: number) => {
    setTrackerState(prev => {
      const next = {
        ...prev,
        favorites: { ...prev.favorites, [id]: !prev.favorites[id] }
      };
      saveTrackerState(next);
      return next;
    });
  };

  const handleNotesChange = (id: number, notes: string) => {
    setTrackerState(prev => {
      const next = {
        ...prev,
        notes: { ...prev.notes, [id]: notes }
      };
      saveTrackerState(next);
      return next;
    });
  };

  // Filtering questions logic
  const filteredQuestions = questions.filter(q => {
    // 1. Category Filter
    if (selectedCategory !== 'All' && q.category !== selectedCategory) return false;

    // 2. Difficulty Filter
    if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) return false;

    // 3. Status Filter
    const status = trackerState.status[q.id] || 'unsolved';
    const isFav = !!trackerState.favorites[q.id];
    if (selectedStatus !== 'All') {
      if (selectedStatus === 'bookmarked') {
        if (!isFav) return false;
      } else {
        if (status !== selectedStatus) return false;
      }
    }

    // 4. Search Query (matches Title, Description, or Category)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchTitle = q.title.toLowerCase().includes(query);
      const matchDesc = q.problemStatement.toLowerCase().includes(query);
      const matchCat = q.category.toLowerCase().includes(query);
      if (!matchTitle && !matchDesc && !matchCat) return false;
    }

    return true;
  });

  return (
    <>
      <div className="ambient-glow-container">
        <div className="ambient-glow glow-1" />
        <div className="ambient-glow glow-2" />
      </div>
      <div className="app-container">
        {/* App Header */}
        <header className="glass-panel app-header">
          <div className="header-title-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BookOpen size={32} style={{ color: 'var(--accent-primary)' }} />
              <h1>TCS NQT Prep Tracker</h1>
            </div>
            <p>Prepare for TCS Ninja and Digital coding exams with the Top 100 Coding Questions</p>
          </div>
          <ThemeToggle />
        </header>

        {/* Progress Dashboards */}
        <StatsDashboard questions={questions} trackerState={trackerState} />

        {/* Filters bar */}
        <Filters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />

        {/* Main Workspace (Table + Detail view) */}
        {selectedQuestion ? (
          <div className="split-container">
            <QuestionTable
              questions={filteredQuestions}
              trackerState={trackerState}
              onStatusChange={handleStatusChange}
              onFavoriteToggle={handleFavoriteToggle}
              onQuestionSelect={setSelectedQuestion}
              selectedQuestionId={selectedQuestion.id}
            />
            <QuestionDetail
              question={selectedQuestion}
              notes={trackerState.notes[selectedQuestion.id] || ''}
              onNotesChange={handleNotesChange}
              onClose={() => setSelectedQuestion(null)}
            />
          </div>
        ) : (
          <QuestionTable
            questions={filteredQuestions}
            trackerState={trackerState}
            onStatusChange={handleStatusChange}
            onFavoriteToggle={handleFavoriteToggle}
            onQuestionSelect={setSelectedQuestion}
          />
        )}
      </div>
    </>
  );
};

export default App;

