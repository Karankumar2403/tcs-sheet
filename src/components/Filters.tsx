import React from 'react';
import { Search } from 'lucide-react';

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedStatus,
  setSelectedStatus,
}) => {
  const categories = ["All", "Arrays", "Numbers", "Number System", "Sorting", "Strings"];
  
  return (
    <div className="glass-panel filter-card">
      <div className="search-filter-row">
        {/* Search Input */}
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Search questions by title or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Difficulty Select */}
        <select
          className="filter-select"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          title="Filter by difficulty level"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Status Select */}
        <select
          className="filter-select"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          title="Filter by completion status"
        >
          <option value="All">All Statuses</option>
          <option value="unsolved">Unsolved</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="bookmarked">Bookmarked ⭐</option>
        </select>
      </div>

      {/* Category Tabs */}
      <div className="tabs-scroll-container">
        <div className="tabs-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
