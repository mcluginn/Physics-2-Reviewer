/**
 * GEN 0110 / 0110L Physics 2 for Engineers - Student Progress & Mastery Tracker
 * LocalStorage persistence, mastery percentages by topic, and weak-area identification.
 */

const STORAGE_KEY = "physics2_student_progress";

const DEFAULT_TOPICS = [
  { id: "coulomb-law", title: "Electrostatics & Coulomb's Law" },
  { id: "electric-field", title: "Electric Field & Superposition" },
  { id: "force-and-acceleration", title: "Force & Acceleration in Field" },
  { id: "electric-potential", title: "Electric Potential (Scalar V)" },
  { id: "work-and-potential-energy", title: "Work & Multi-Charge Energy" },
  { id: "wave-basics", title: "Wave Fundamentals (v = fλ)" },
  { id: "speed-of-sound-temp", title: "Speed of Sound vs. Temp" },
  { id: "sound-intensity-decibels", title: "Sound Intensity & Decibels" },
  { id: "multiple-sound-sources", title: "Multiple Identical Sound Sources" },
  { id: "doppler-effect", title: "The Doppler Effect" },
  { id: "closed-pipe-resonance", title: "Closed-Pipe Resonance" },
  { id: "neutral-point", title: "Electrostatic Neutral Point" },
  { id: "charged-spheres-equilibrium", title: "Charged Spheres Equilibrium" },
  { id: "cgs-electrostatics", title: "CGS Electrostatic System" },
  { id: "vector-components-efield", title: "Vector Components of Field" }
];

export const DASHBOARD = {
  data: null,

  init(container) {
    this.container = container;
    this.load();
    this.render();
  },

  load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.data = JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Could not read from localStorage", e);
    }

    if (!this.data) {
      this.data = {
        totalAttempted: 0,
        totalCorrect: 0,
        topics: {},
        history: []
      };
      DEFAULT_TOPICS.forEach(t => {
        this.data.topics[t.id] = { attempted: 0, correct: 0 };
      });
    }

    // Ensure all topics exist in map
    DEFAULT_TOPICS.forEach(t => {
      if (!this.data.topics[t.id]) {
        this.data.topics[t.id] = { attempted: 0, correct: 0 };
      }
    });
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn("Could not write to localStorage", e);
    }
  },

  recordAttempt(topicId, isCorrect, difficulty = "Standard") {
    if (!this.data) this.load();
    this.data.totalAttempted++;
    if (isCorrect) this.data.totalCorrect++;

    if (!this.data.topics[topicId]) {
      this.data.topics[topicId] = { attempted: 0, correct: 0 };
    }
    this.data.topics[topicId].attempted++;
    if (isCorrect) {
      this.data.topics[topicId].correct++;
    }

    this.data.history.unshift({
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      topicId,
      isCorrect,
      difficulty
    });

    if (this.data.history.length > 25) {
      this.data.history.pop();
    }

    this.save();
  },

  reset() {
    this.data = {
      totalAttempted: 0,
      totalCorrect: 0,
      topics: {},
      history: []
    };
    DEFAULT_TOPICS.forEach(t => {
      this.data.topics[t.id] = { attempted: 0, correct: 0 };
    });
    this.save();
    if (this.container) this.render();
  },

  render() {
    if (!this.container) return;
    this.load();

    const overallPct = this.data.totalAttempted > 0 
      ? Math.round((this.data.totalCorrect / this.data.totalAttempted) * 100)
      : 0;

    // Detect weak topics: attempted > 0 and pct < 70%, or attempted == 0
    const weakTopics = DEFAULT_TOPICS.filter(t => {
      const stat = this.data.topics[t.id];
      if (!stat || stat.attempted === 0) return true; // not yet practiced
      return (stat.correct / stat.attempted) < 0.70;
    });

    this.container.innerHTML = `
      <div class="dashboard-grid">
        <!-- High-level stats banner -->
        <div class="dash-overview-card card">
          <div class="dash-stat">
            <span class="stat-label">Overall Mastery</span>
            <span class="stat-value text-accent">${overallPct}%</span>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: ${overallPct}%"></div>
            </div>
          </div>
          <div class="dash-stat">
            <span class="stat-label">Total Questions Solved</span>
            <span class="stat-value">${this.data.totalAttempted}</span>
          </div>
          <div class="dash-stat">
            <span class="stat-label">Correct Solutions</span>
            <span class="stat-value text-success">${this.data.totalCorrect}</span>
          </div>
          <div class="dash-stat">
            <span class="stat-label">Identified Weak Areas</span>
            <span class="stat-value text-warning">${weakTopics.length}</span>
          </div>
        </div>

        <!-- Weak areas callout -->
        ${weakTopics.length > 0 ? `
          <div class="dash-weak-card card">
            <div class="card-header">
              <h3>🎯 Recommended Review Focus</h3>
              <span class="badge badge-warning">Target Competencies</span>
            </div>
            <p>Prioritize these examination topics before the Midterm:</p>
            <div class="weak-tags-list">
              ${weakTopics.map(t => {
                const stat = this.data.topics[t.id];
                const pct = stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : 0;
                return `
                  <div class="weak-tag-item">
                    <div>
                      <strong>${t.title}</strong>
                      <span class="tag-score">${stat.attempted === 0 ? "Not yet practiced" : `${pct}% (${stat.correct}/${stat.attempted})`}</span>
                    </div>
                    <button class="btn btn-sm btn-primary btn-practice-weak" data-topic="${t.id}">Practice Topic</button>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        ` : ""}

        <!-- Topic Mastery Grid -->
        <div class="dash-topics-card card">
          <div class="card-header">
            <h3>📊 Topic Mastery Breakdown</h3>
            <button class="btn btn-outline btn-sm" id="btn-reset-progress">Reset Progress</button>
          </div>
          <div class="mastery-bars-list">
            ${DEFAULT_TOPICS.map(t => {
              const stat = this.data.topics[t.id];
              const pct = stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : 0;
              let barColor = "var(--primary)";
              if (stat.attempted > 0) {
                if (pct >= 80) barColor = "var(--success)";
                else if (pct < 60) barColor = "var(--danger)";
                else barColor = "var(--warning)";
              } else {
                barColor = "var(--border)";
              }

              return `
                <div class="mastery-row">
                  <div class="mastery-header">
                    <span class="mastery-topic-title">${t.title}</span>
                    <span class="mastery-score">${stat.correct} / ${stat.attempted} (${pct}%)</span>
                  </div>
                  <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${stat.attempted === 0 ? 0 : pct}%; background-color: ${barColor};"></div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Recent Activity Feed -->
        <div class="dash-activity-card card">
          <div class="card-header">
            <h3>⏱️ Recent Practice Activity</h3>
          </div>
          ${this.data.history.length === 0 ? `
            <p class="text-muted">No questions attempted yet. Start practicing in Quiz mode or the Topic Reviewer!</p>
          ` : `
            <div class="activity-timeline">
              ${this.data.history.map(item => {
                const topic = DEFAULT_TOPICS.find(t => t.id === item.topicId);
                const title = topic ? topic.title : item.topicId;
                return `
                  <div class="timeline-item">
                    <span class="timeline-status ${item.isCorrect ? 'text-success' : 'text-danger'}">
                      ${item.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                    <span class="timeline-title">${title} (${item.difficulty})</span>
                    <span class="timeline-time">${item.timestamp}</span>
                  </div>
                `;
              }).join("")}
            </div>
          `}
        </div>
      </div>
    `;

    // Wire buttons
    const resetBtn = this.container.querySelector("#btn-reset-progress");
    if (resetBtn) {
      resetBtn.onclick = () => {
        if (confirm("Reset all student mastery and attempt history?")) {
          this.reset();
        }
      };
    }

    this.container.querySelectorAll(".btn-practice-weak").forEach(btn => {
      btn.onclick = () => {
        const tid = btn.dataset.topic;
        const quizTab = document.querySelector('[data-tab="quiz"]');
        if (quizTab) quizTab.click();
        const sel = document.getElementById("quiz-filter-topic");
        if (sel) {
          sel.value = tid;
          document.getElementById("btn-start-quiz").click();
        }
      };
    });
  }
};
