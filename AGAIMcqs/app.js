// State Management
const STORAGE_KEY = "AGAI_ST2_FINAL_STATE_V5";
let currentQIndex = 0;
let currentViewingMode = "question"; // "question" | "module_guide"
let activeGuideModuleId = "mod1";
let userExamAnswers = {}; // { q_id: option_str }
let userReviewFlags = new Set();
let userSampleAnswers = {}; // { "q_id_s_idx": option_str }
let isTheoryCollapsed = false;

function loadStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      currentQIndex = data.currentQIndex || 0;
      userExamAnswers = data.userExamAnswers || {};
      userReviewFlags = new Set(data.userReviewFlags || []);
      userSampleAnswers = data.userSampleAnswers || {};
    }
  } catch (e) {
    console.error("Failed to load stored state", e);
  }
}

function saveCurrentState() {
  try {
    const data = {
      currentQIndex,
      userExamAnswers,
      userReviewFlags: Array.from(userReviewFlags),
      userSampleAnswers
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save state", e);
  }
}

function resetProgressPrompt() {
  if (confirm("Are you sure you want to reset everything (answers, bookmarks, and scores)?")) {
    localStorage.removeItem(STORAGE_KEY);
    userExamAnswers = {};
    userReviewFlags = new Set();
    userSampleAnswers = {};
    currentQIndex = 0;
    currentViewingMode = "question";
    document.getElementById("quizResultsScreen").classList.remove("is-active");
    document.getElementById("quizPracticeArea").style.display = "grid";
    renderApplication();
  }
}

function clearAllAnswersPrompt() {
  if (confirm("Clear all answers across all 65 questions so you can test yourself again?")) {
    userExamAnswers = {};
    userSampleAnswers = {};
    saveCurrentState();
    document.getElementById("quizResultsScreen").classList.remove("is-active");
    document.getElementById("quizPracticeArea").style.display = "grid";
    renderApplication();
  }
}

function clearCurrentQuestionChoice() {
  const q = QUIZ_QUESTIONS[currentQIndex];
  if (userExamAnswers[q.id] !== undefined) {
    delete userExamAnswers[q.id];
    saveCurrentState();
    renderApplication();
  }
}

function calcTotalScore() {
  return QUIZ_QUESTIONS.reduce((sum, q) => {
    return sum + (userExamAnswers[q.id] === q.correct ? q.points : 0);
  }, 0);
}

function getModuleStats(moduleId) {
  const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === moduleId);
  const total = modQuestions.length;
  const answered = modQuestions.filter(q => userExamAnswers[q.id] !== undefined).length;
  const correct = modQuestions.filter(q => userExamAnswers[q.id] === q.correct).length;
  return { total, answered, correct, pct: total ? Math.round((answered / total) * 100) : 0 };
}

// Render Sidebar Accordion with light red/green status buttons
function renderSidebarAccordion() {
  const container = document.getElementById("sidebarAccordionContainer");
  container.innerHTML = "";

  const activeQuestion = QUIZ_QUESTIONS[currentQIndex];

  SYLLABUS_MODULES.forEach((mod) => {
    const stats = getModuleStats(mod.id);
    const isCurrent = activeQuestion.module_id === mod.id;

    const itemDiv = document.createElement("div");
    itemDiv.className = `module-acc-item ${isCurrent ? 'is-current-module' : ''}`;

    const btn = document.createElement("button");
    btn.className = `module-acc-btn ${isCurrent ? 'active' : ''}`;
    btn.innerHTML = `
      <div class="module-info-left">
        <span class="mod-num-tag">Module ${mod.num}</span>
        <span class="mod-title-text">${mod.title.split(':')[1] || mod.title}</span>
        <span class="mod-lec-text">${mod.lectures}</span>
      </div>
      <span class="module-pill-badge">${stats.answered}/${stats.total}</span>
    `;

    const qGridArea = document.createElement("div");
    qGridArea.className = "module-questions-grid";

    // 1. Full-width Module Guide button
    const guideBtn = document.createElement("button");
    guideBtn.className = `module-guide-nav-btn ${currentViewingMode === 'module_guide' && activeGuideModuleId === mod.id ? 'active-guide' : ''}`;
    guideBtn.innerHTML = `📖 Module ${mod.num} Foundation Guide`;
    guideBtn.addEventListener("click", () => {
      activeGuideModuleId = mod.id;
      currentViewingMode = "module_guide";
      renderApplication();
    });
    qGridArea.appendChild(guideBtn);

    // 2. Question number buttons with green/red status
    const numGrid = document.createElement("div");
    numGrid.className = "q-grid-items";

    const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id);
    modQuestions.forEach((q) => {
      const gIndex = QUIZ_QUESTIONS.findIndex(item => item.id === q.id);
      const qBtn = document.createElement("button");
      qBtn.className = "q-nav-btn";
      qBtn.textContent = gIndex + 1;

      if (currentViewingMode === "question" && gIndex === currentQIndex) {
        qBtn.classList.add("current");
      }

      // Check correctness for coloring
      const userChoice = userExamAnswers[q.id];
      if (userChoice !== undefined) {
        if (userChoice === q.correct) {
          qBtn.classList.add("answered-correct");
        } else {
          qBtn.classList.add("answered-wrong");
        }
      }

      if (userReviewFlags.has(q.id)) {
        qBtn.classList.add("flagged");
      }

      qBtn.title = `Q${gIndex + 1}: ${q.topic}`;
      qBtn.addEventListener("click", () => {
        currentQIndex = gIndex;
        currentViewingMode = "question";
        renderApplication();
      });

      numGrid.appendChild(qBtn);
    });

    qGridArea.appendChild(numGrid);
    itemDiv.appendChild(btn);
    itemDiv.appendChild(qGridArea);
    container.appendChild(itemDiv);
  });
}

// Render Top Progress Bar
function renderTopProgressTrack() {
  const answered = Object.keys(userExamAnswers).length;
  const total = QUIZ_QUESTIONS.length;
  const pct = Math.round((answered / total) * 100);
  const score = calcTotalScore();

  document.getElementById("labelCurrentQuestionNumber").textContent = `Question ${currentQIndex + 1} of ${total}`;
  document.getElementById("labelProgressPercentage").textContent = `${pct}%`;
  document.getElementById("labelAnsweredCount").textContent = answered;
  document.getElementById("labelCurrentTotalScore").textContent = score;
  document.getElementById("overallProgressBarTrack").style.width = `${pct}%`;
}

// Render Module Masterclass Guide
function renderModuleGuideView() {
  const guide = MODULE_GUIDES[activeGuideModuleId] || MODULE_GUIDES["mod1"];
  
  document.getElementById("guideModTitle").textContent = guide.title;
  document.getElementById("guideModLec").textContent = guide.lectures;
  document.getElementById("guideModWhyStudy").innerHTML = formatMarkdown(guide.why_study);
  document.getElementById("guideModWhatIsIt").innerHTML = formatMarkdown(guide.what_is_it.replace(/\n/g, '<br>'));
  document.getElementById("guideModRealWorld").innerHTML = formatMarkdown(guide.real_world_use.replace(/\n/g, '<br>'));

  const mechanicsList = document.getElementById("guideModMechanicsList");
  mechanicsList.innerHTML = "";
  guide.core_mechanics.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = formatMarkdown(item);
    mechanicsList.appendChild(li);
  });

  const diagContainer = document.getElementById("guideModDiagramContainer");
  if (guide.diagram_html) {
    diagContainer.parentElement.style.display = "block";
    diagContainer.innerHTML = guide.diagram_html;
  } else {
    diagContainer.parentElement.style.display = "none";
  }

  const exampleBox = document.getElementById("guideModStepExample");
  if (guide.step_by_step_example) {
    exampleBox.parentElement.style.display = "block";
    exampleBox.innerHTML = formatMarkdown(guide.step_by_step_example.replace(/\n/g, '<br>'));
  } else {
    exampleBox.parentElement.style.display = "none";
  }

  const expectedList = document.getElementById("guideModExpectedQuestionsList");
  expectedList.innerHTML = "";
  guide.expected_exam_questions.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = formatMarkdown(item.replace(/\n/g, '<br>'));
    expectedList.appendChild(li);
  });

  document.getElementById("btnStartModuleQuestions").onclick = () => {
    const firstIdx = QUIZ_QUESTIONS.findIndex(q => q.module_id === activeGuideModuleId);
    if (firstIdx !== -1) currentQIndex = firstIdx;
    currentViewingMode = "question";
    renderApplication();
  };
}

// Render Main Question View
function renderMainQuestionView() {
  const q = QUIZ_QUESTIONS[currentQIndex];

  // Badges & Headers
  document.getElementById("badgeModuleNumTitle").textContent = q.module_name.split(":")[0];
  document.getElementById("badgeLectureInfo").textContent = q.syllabus_lec;
  
  const diffBadge = document.getElementById("badgeDifficultyLevel");
  diffBadge.textContent = q.difficulty;
  diffBadge.className = `tag-badge tag-diff-${q.difficulty.toLowerCase()}`;

  document.getElementById("badgeMarksPoints").textContent = `${q.points} ${q.points === 1 ? 'Mark' : 'Marks'}`;

  document.getElementById("topicModulePrefix").textContent = `${q.module_name.split(':')[0]} • ${q.syllabus_lec}`;
  document.getElementById("topicMainHeading").textContent = q.topic;

  // Theory Masterclass Render
  document.getElementById("theoryWhatIsItText").innerHTML = formatMarkdown(q.theory.what_is_it);
  document.getElementById("theoryWhyWeNeedItText").innerHTML = formatMarkdown(q.theory.why_we_need_it);
  document.getElementById("theoryHowItWorksText").innerHTML = formatMarkdown(q.theory.how_it_works);

  const formulaBox = document.getElementById("theoryFormulaBox");
  if (q.theory.formula) {
    formulaBox.style.display = "block";
    formulaBox.textContent = q.theory.formula;
  } else {
    formulaBox.style.display = "none";
  }

  const takeawaysList = document.getElementById("theoryTakeawaysList");
  takeawaysList.innerHTML = "";
  q.theory.key_takeaways.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = formatMarkdown(item);
    takeawaysList.appendChild(li);
  });

  // Warm-up Sample Practice Questions
  const samplesArea = document.getElementById("warmupSamplesContainer");
  samplesArea.innerHTML = "";
  q.sample_questions.forEach((sample, sIdx) => {
    const sKey = `${q.id}_s_${sIdx}`;
    const selectedAns = userSampleAnswers[sKey];

    const block = document.createElement("div");
    block.className = "sample-q-block";

    const title = document.createElement("div");
    title.className = "sample-q-title";
    title.innerHTML = `<strong>Concept Warm-up #${sIdx + 1}:</strong> ${formatMarkdown(sample.q)}`;
    block.appendChild(title);

    const optsStack = document.createElement("div");
    optsStack.className = "sample-options-list";
    sample.options.forEach(opt => {
      const optBtn = document.createElement("button");
      optBtn.className = "sample-opt-btn";
      optBtn.textContent = opt;

      if (selectedAns !== undefined) {
        if (opt === sample.ans) optBtn.classList.add("is-correct");
        if (opt === selectedAns && selectedAns !== sample.ans) optBtn.classList.add("is-wrong");
      }

      optBtn.addEventListener("click", () => {
        userSampleAnswers[sKey] = opt;
        saveCurrentState();
        renderMainQuestionView();
      });
      optsStack.appendChild(optBtn);
    });
    block.appendChild(optsStack);

    const expBtn = document.createElement("button");
    expBtn.className = "sample-exp-btn";
    expBtn.innerHTML = `<span>💡 View Concept Explanation</span>`;

    const expBox = document.createElement("div");
    expBox.className = "sample-exp-content";
    expBox.innerHTML = `<strong>Correct Answer: ${sample.ans}</strong><br>${formatMarkdown(sample.exp)}`;

    expBtn.addEventListener("click", () => {
      expBox.classList.toggle("is-open");
    });

    block.appendChild(expBtn);
    block.appendChild(expBox);
    samplesArea.appendChild(block);
  });

  // Sir's Exam MCQ
  document.getElementById("examPrimaryQuestionText").innerHTML = formatMarkdown(q.question);

  const chosenOption = userExamAnswers[q.id];
  const examOptsContainer = document.getElementById("examOptionsContainer");
  examOptsContainer.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "exam-opt-btn";
    btn.disabled = chosenOption !== undefined;
    btn.innerHTML = `
      <span class="opt-badge-letter">${letters[idx]}</span>
      <span>${escapeHtml(opt)}</span>
    `;

    if (chosenOption !== undefined) {
      if (opt === q.correct) btn.classList.add("correct");
      if (opt === chosenOption && chosenOption !== q.correct) btn.classList.add("wrong");
    }

    btn.addEventListener("click", () => {
      userExamAnswers[q.id] = opt;
      saveCurrentState();
      renderApplication();
    });

    examOptsContainer.appendChild(btn);
  });

  // Feedback Box
  const feedbackBox = document.getElementById("examResultFeedbackBox");
  if (chosenOption !== undefined) {
    const isCorrect = chosenOption === q.correct;
    const correctLetter = letters[q.options.indexOf(q.correct)];
    feedbackBox.className = `exam-feedback-box is-shown ${isCorrect ? 'is-good' : 'is-bad'}`;
    feedbackBox.innerHTML = `
      <div class="feedback-headline">
        ${isCorrect ? '✅ Excellent! Correct Answer' : '❌ Incorrect'} — Option ${correctLetter}
      </div>
      <div>${formatMarkdown(q.explanation)}</div>
    `;
  } else {
    feedbackBox.className = "exam-feedback-box";
    feedbackBox.innerHTML = "";
  }

  // Navigation Buttons
  document.getElementById("btnPrevQuestion").disabled = currentQIndex === 0;
  
  const nextBtn = document.getElementById("btnNextQuestion");
  if (currentQIndex === QUIZ_QUESTIONS.length - 1) {
    nextBtn.textContent = "Finish & View Results 🏁";
  } else {
    nextBtn.textContent = "Next Question →";
  }

  const flagBtn = document.getElementById("btnFlagQuestion");
  flagBtn.classList.toggle("is-flagged", userReviewFlags.has(q.id));
  flagBtn.textContent = userReviewFlags.has(q.id) ? "★ Marked for Review" : "☆ Mark for Review";
}

// Render Full Roadmap Modal
function renderRoadmapModal() {
  const container = document.getElementById("roadmapModulesTimeline");
  container.innerHTML = "";

  SYLLABUS_MODULES.forEach((mod, idx) => {
    const stats = getModuleStats(mod.id);
    const isDone = stats.answered === stats.total;

    const card = document.createElement("div");
    card.className = `roadmap-module-card ${isDone ? 'is-complete' : ''}`;
    
    let topicsListHtml = "";
    mod.topics.forEach(t => {
      topicsListHtml += `<li>${t}</li>`;
    });

    card.innerHTML = `
      <div class="roadmap-card-top">
        <div class="roadmap-mod-header-left">
          <div class="roadmap-mod-badge-icon">${isDone ? '✓' : mod.num}</div>
          <div class="roadmap-mod-titles">
            <h3>${mod.title}</h3>
            <span>${mod.lectures}</span>
          </div>
        </div>
        <div class="roadmap-mod-progress-box">
          <span class="roadmap-stat-pill">${stats.answered} / ${stats.total} Answered (${stats.pct}%)</span>
          <button class="btn-jump-module">Open Module Guide →</button>
        </div>
      </div>
      <p style="font-size: 13.5px; color: #475569; margin-top: 2px;">${mod.desc}</p>
      <div class="roadmap-topics-list">
        <h5>Full Topic Syllabus:</h5>
        <ul>${topicsListHtml}</ul>
      </div>
    `;

    card.querySelector(".btn-jump-module").addEventListener("click", (e) => {
      e.stopPropagation();
      activeGuideModuleId = mod.id;
      currentViewingMode = "module_guide";
      document.getElementById("syllabusRoadmapModal").classList.remove("is-active");
      renderApplication();
    });

    container.appendChild(card);

    if (idx < SYLLABUS_MODULES.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "roadmap-flow-arrow";
      arrow.innerHTML = "↓";
      container.appendChild(arrow);
    }
  });
}

// Results View
function showFinalResultsScreen() {
  const totalMarks = 92;
  const score = calcTotalScore();
  const answered = Object.keys(userExamAnswers).length;
  const correct = QUIZ_QUESTIONS.filter(q => userExamAnswers[q.id] === q.correct).length;
  const wrong = answered - correct;
  const unanswered = QUIZ_QUESTIONS.length - answered;
  const pct = Math.round((score / totalMarks) * 100);

  document.getElementById("quizPracticeArea").style.display = "none";
  const resCard = document.getElementById("quizResultsScreen");
  resCard.classList.add("is-active");

  document.getElementById("resTotalPercent").textContent = `${pct}%`;
  document.getElementById("resMarksTotal").textContent = `${score} / ${totalMarks}`;
  document.getElementById("resCorrectTotal").textContent = correct;
  document.getElementById("resWrongTotal").textContent = wrong;
  document.getElementById("resUnansweredTotal").textContent = unanswered;

  let feedback = "";
  if (pct >= 85) feedback = "🌟 Outstanding! You have thoroughly mastered all ST-2 syllabus topics!";
  else if (pct >= 70) feedback = "👍 Great performance! Review your missed questions below to aim for full marks in the exam.";
  else if (pct >= 50) feedback = "📖 Good effort! Revisit the Topic Masterclass theory sections and try the warm-up examples.";
  else feedback = "💡 Keep revising! Go through the modules step-by-step to solidify the fundamentals.";
  document.getElementById("resEvaluationMessage").textContent = feedback;

  const listArea = document.getElementById("resultsDetailedList");
  listArea.innerHTML = "";
  QUIZ_QUESTIONS.forEach((q, idx) => {
    const chosen = userExamAnswers[q.id];
    const isCorrect = chosen === q.correct;
    const item = document.createElement("div");
    item.style.border = "1px solid #e2e8f0";
    item.style.borderLeft = isCorrect ? "5px solid #22c55e" : (chosen ? "5px solid #ef4444" : "5px solid #94a3b8");
    item.style.borderRadius = "10px";
    item.style.padding = "14px 16px";
    item.style.marginBottom = "12px";
    item.style.background = "#ffffff";
    item.innerHTML = `
      <div style="font-size:12px; color:#64748b; font-weight:800; margin-bottom:4px;">
        Q${idx + 1} • ${q.module_name.split(':')[0]} • ${q.topic}
      </div>
      <div style="font-weight:800; font-size:15px; margin-bottom:6px;">${formatMarkdown(q.question)}</div>
      <div style="font-size:13.5px; margin-bottom:4px;">
        <strong>Your Answer:</strong> <span style="color:${isCorrect ? '#15803d' : '#b91c1c'}; font-weight:700;">${chosen ? escapeHtml(chosen) : '<em>Unanswered</em>'}</span>
      </div>
      <div style="font-size:13.5px; color:#15803d; margin-bottom:4px;">
        <strong>Correct Answer:</strong> <strong>${escapeHtml(q.correct)}</strong>
      </div>
      <div style="font-size:13px; color:#475569; background:#f8fafc; padding:8px 12px; border-radius:6px; margin-top:6px;">
        ${formatMarkdown(q.explanation)}
      </div>
    `;
    listArea.appendChild(item);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Utility formatting
function formatMarkdown(text) {
  if (!text) return "";
  let s = String(text);
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*(.*?)\*/g, '<em>$1</em>');
  return s;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>'"]/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[c]));
}

function renderApplication() {
  saveCurrentState();
  renderTopProgressTrack();
  renderSidebarAccordion();

  const guideArea = document.getElementById("moduleMasterclassViewArea");
  const qArea = document.getElementById("questionModeViewArea");

  if (currentViewingMode === "module_guide") {
    guideArea.classList.add("is-visible");
    qArea.style.display = "none";
    renderModuleGuideView();
  } else {
    guideArea.classList.remove("is-visible");
    qArea.style.display = "block";
    renderMainQuestionView();
  }
}

// Event Listeners
document.getElementById("btnPrevQuestion").addEventListener("click", () => {
  if (currentQIndex > 0) {
    currentQIndex--;
    currentViewingMode = "question";
    renderApplication();
  }
});

document.getElementById("btnNextQuestion").addEventListener("click", () => {
  if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
    currentQIndex++;
    currentViewingMode = "question";
    renderApplication();
  } else {
    showFinalResultsScreen();
  }
});

document.getElementById("btnClearCurrentQChoice").addEventListener("click", clearCurrentQuestionChoice);

document.getElementById("clearAllAnswersBtn").addEventListener("click", clearAllAnswersPrompt);

document.getElementById("btnFlagQuestion").addEventListener("click", () => {
  const qId = QUIZ_QUESTIONS[currentQIndex].id;
  if (userReviewFlags.has(qId)) userReviewFlags.delete(qId);
  else userReviewFlags.add(qId);
  renderApplication();
});

document.getElementById("theoryCollapseToggleBtn").addEventListener("click", () => {
  const body = document.getElementById("theoryFullContentContainer");
  const hint = document.getElementById("theoryExpandCollapseHint");
  isTheoryCollapsed = !isTheoryCollapsed;
  if (isTheoryCollapsed) {
    body.style.display = "none";
    hint.textContent = "▲ Expand";
  } else {
    body.style.display = "flex";
    hint.textContent = "▼ Collapse";
  }
});

document.getElementById("openRoadmapModalBtn").addEventListener("click", () => {
  renderRoadmapModal();
  document.getElementById("syllabusRoadmapModal").classList.add("is-active");
});

document.getElementById("btnCloseRoadmapModal").addEventListener("click", () => {
  document.getElementById("syllabusRoadmapModal").classList.remove("is-active");
});

document.getElementById("syllabusRoadmapModal").addEventListener("click", (e) => {
  if (e.target.id === "syllabusRoadmapModal") {
    document.getElementById("syllabusRoadmapModal").classList.remove("is-active");
  }
});

document.getElementById("resetUserProgressBtn").addEventListener("click", resetProgressPrompt);

document.getElementById("btnReturnToPractice").addEventListener("click", () => {
  document.getElementById("quizResultsScreen").classList.remove("is-active");
  document.getElementById("quizPracticeArea").style.display = "grid";
  renderApplication();
});

document.getElementById("btnReviewAllAnswers").addEventListener("click", () => {
  document.getElementById("resultsDetailedReviewArea").scrollIntoView({ behavior: "smooth" });
});

// Arrow Keys Navigation
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if (e.key === "ArrowRight") {
    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      currentQIndex++;
      currentViewingMode = "question";
      renderApplication();
    }
  } else if (e.key === "ArrowLeft") {
    if (currentQIndex > 0) {
      currentQIndex--;
      currentViewingMode = "question";
      renderApplication();
    }
  }
});

// Initialize on Load
loadStoredState();
renderApplication();
