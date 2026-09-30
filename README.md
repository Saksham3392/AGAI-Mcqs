# 🚀 Applied Generative & Agentic AI Systems — AGAI Masterclass

> **Course:** Applied Generative & Agentic AI Systems (24CAI0305)  
> **University:** Chitkara University  
> **Purpose:** Interactive exam preparation, syllabus revision, MCQ practice, and concept learning.

🌐 **Live application:**

> **[https://agai-mcqs.onrender.com](https://agai-mcqs.onrender.com)**

> **[https://agai-mcqs-8k6b.vercel.app](https://agai-mcqs-8k6b.vercel.app)**

> To run on pc

```cmd
cd /d "c:\Users\Asus\Downloads\CSE AI 5th Sem\AGAI\AGAIMcqs" && start http://localhost:3020 && python -m http.server 3020
```

---

## 📚 Overview

**AGAI Masterclass** is a browser-based learning platform built for the **Applied Generative & Agentic AI Systems (24CAI0305)** course.

It combines:

- 📖 syllabus-aligned module guides
- 🧠 concept explanations and exam-focused theory
- ❓ large MCQ question banks
- 📝 continuous exam/practice modes
- 📊 progress tracking
- 🎯 review and retry workflows
- 🧮 interactive AI/ML visualizers and calculators
- 🌙 light/dark themes
- 🎉 sound effects and completion feedback

The application is organized into **ST-1, ST-2, and End-Term** preparation tracks.

---

## 🗂️ Study Tracks

| Track        | Coverage                                |     Question Bank |
| ------------ | --------------------------------------- | ----------------: |
| **ST-1**     | Lectures 1–25                           |  **72 questions** |
| **ST-2**     | Lectures 24–37                          |  **80 questions** |
| **End-Term** | Lectures 38–45 + full-syllabus practice | **100 questions** |

### ST-1 — Foundations

Covers the early deep-learning and AI foundations, including:

- Neural networks and biological inspiration
- Perceptrons and learning
- Backpropagation
- CNNs and computer vision
- Core deep-learning concepts
- Other lecture-aligned ST-1 topics

### ST-2 — Transformers & Modern Deep Learning

Covers topics including:

- Scaled dot-product self-attention
- Multi-Head Attention (MHA)
- Transformer architecture
- Positional encoding
- Vision Transformers (ViT / Swin / CaiT)
- LLM architecture
- Autoregressive pre-training
- Sampling strategies
- LoRA and parameter-efficient fine-tuning

### End-Term — Generative & Agentic AI

Covers the later course material, including:

- Retrieval-Augmented Generation (RAG)
- APIs and tool use
- Agentic AI
- Responsible AI
- Ethics and related end-term concepts

---

## ✨ Key Features

### 🧑‍🏫 Module Masterclasses

Each study track provides syllabus-aligned module guides with:

- beginner-friendly explanations
- important concepts
- formulas and calculations
- practical intuition
- exam-focused points
- common traps and misconceptions
- warm-up questions and drills

### ❓ Large MCQ Banks

The project currently contains:

- **72 ST-1 questions**
- **80 ST-2 questions**
- **100 End-Term practice questions**

Questions include difficulty levels, marks/points, explanations, topic/module information, and answer validation.

### 📝 Practice & Exam Modes

Study using different workflows depending on your goal:

- **Practice mode** — learn while solving
- **Continuous exam mode** — attempt questions sequentially
- **Review flags** — mark questions to revisit
- **Reset/retry** — restart a practice or exam session
- **Answer explanations** — understand why an answer is correct

### 🧮 Interactive Visualizers

The application includes interactive learning tools for concepts such as:

- Self-Attention heatmaps and token inspection
- Multi-Head Attention subspaces
- Vision Transformer patch partitioning
- LLM temperature and Top-p sampling
- LoRA rank and memory/VRAM calculations

These are intended to make mathematical and architectural concepts easier to visualize.

### 📊 Local Progress Persistence

Learning state is stored in the browser using `localStorage`, including relevant:

- current question position
- practice answers
- exam answers
- review flags
- sample answers
- theme preference

No external database is required for the core application.

### 🎨 Modern UI

The interface includes:

- responsive layouts
- Light / Dark mode
- Manrope, Space Grotesk and JetBrains Mono typography
- animated UI interactions
- confetti/completion effects
- optional sound effects
- syllabus navigation
- ST-1 / ST-2 / End-Term switching

---

## 🏗️ Project Structure

```text
AGAIMcqs/
├── index.html                    # ST-2 main application
├── st1.html                      # ST-1 application
├── endterm.html                  # End-Term application
│
├── app.js                        # ST-2 application controller
├── st1_app.js                    # ST-1 application controller
├── endterm_app.js                # End-Term application controller
│
├── syllabus.js                   # Shared syllabus/module metadata
├── module_guides.js              # ST-2 module guides
├── st1_module_guides.js          # ST-1 module guides
├── endterm_module_guides.js      # End-Term module guides
│
├── quiz_questions.js             # ST-2 question bank
├── st1_quiz_questions.js         # ST-1 question bank
├── endterm_quiz_questions.js     # End-Term question bank
├── endterm_100_questions.js      # 100-question End-Term pool
│
├── interactive_visualizers.js    # Interactive learning tools
├── visualizers.css               # Visualizer styles
├── components.css                # Component styles
├── main.css                      # Main application styles
├── app.css                       # Additional application styles
│
├── sound_effects.js              # UI sound effects
├── confetti.js                   # Completion animation
│
├── serve.py                      # Local Python development server
├── nginx.conf                    # Nginx configuration
├── Dockerfile                    # Docker deployment
├── docker-compose.yml             # Docker Compose setup
├── render.yaml                   # Render deployment configuration
│
├── favicon.svg
├── favicon.ico
└── README.md
```

> The repository also contains recovered/intermediate data files and development artifacts. They are retained in the project for reference/recovery and are not required for the basic learning flow.

---

## 💻 Run Locally

### Option 1 — Python

The project is a static web application, so no Node.js installation is required.

From the project directory:

```bash
python serve.py
```

Then open:

```text
http://localhost:8000
```

### Option 2 — Python HTTP Server

You can also use Python's built-in HTTP server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 3 — Docker Compose

```bash
docker compose up -d
```

Then open:

```text
http://localhost:8000
```

To stop it:

```bash
docker compose down
```

---

## 🐳 Docker

The project uses **Nginx Alpine** for serving the static application.

Build:

```bash
docker build -t agai-mcqs .
```

Run:

```bash
docker run -p 8000:80 agai-mcqs
```

Open:

```text
http://localhost:8000
```

---

## ☁️ Deployment

The repository includes a `render.yaml` configuration for Render deployment.

The project supports:

1. **Static-site deployment** — recommended for this frontend-only application.
2. **Docker web-service deployment** — uses the included `Dockerfile` and Nginx configuration.

### Static deployment

The application has no frontend build step:

```text
Build Command:   none
Publish Path:    .
```

The current live deployment is:

**https://agai-mcqs.onrender.com**

---

## 🧩 Technology Stack

| Technology             | Usage                                     |
| ---------------------- | ----------------------------------------- |
| **HTML5**              | Application structure                     |
| **CSS3**               | Responsive UI and visual system           |
| **Vanilla JavaScript** | Application logic and state               |
| **LocalStorage API**   | Client-side progress persistence          |
| **Canvas / JS**        | Visual effects and interactive components |
| **Nginx**              | Production static-file serving            |
| **Python**             | Lightweight local development server      |
| **Docker**             | Containerized deployment                  |
| **Render**             | Cloud deployment                          |

No framework or package manager is required for the core application.

---

## 🔄 Application Flow

```text
                    ┌─────────────────────┐
                    │   AGAI Masterclass  │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
        ┌─────────┐       ┌─────────┐      ┌──────────┐
        │  ST-1   │       │  ST-2   │      │ End-Term │
        │ Lec 1–25│       │Lec 24–37│      │ Lec 38–45│
        └────┬────┘       └────┬────┘      └─────┬────┘
             │                 │                 │
             └─────────────────┼─────────────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Module Masterclass  │
                    └──────────┬──────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Practice / Exam     │
                    │       Mode          │
                    └──────────┬──────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Review + Explanation│
                    └──────────┬──────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Local Progress Save │
                    └─────────────────────┘
```

---

## 🔐 Privacy & Data

The core application is client-side.

Practice state is persisted locally through the browser's `localStorage`. The project does not require a user account or application database to run the study experience.

> Do not put private or sensitive information into question-bank files or other static project assets if the repository is public.

---

## 🛠️ Development Notes

This project intentionally uses plain HTML, CSS, and JavaScript to keep deployment simple.

There is currently:

- no `package.json`
- no npm build pipeline
- no framework dependency
- no backend database
- no authentication requirement

To modify the application, edit the relevant HTML, CSS, or JavaScript files and refresh the browser.

### Cache busting

The HTML pages use versioned stylesheet/script URLs such as:

```html
main.css?v=9.6 app.js?v=9.6
```

When deploying a changed static asset, update the query-string version if needed to force browsers/CDNs to fetch the new file.

---

## 📌 Important Files

### Main entry points

- `index.html` → ST-2
- `st1.html` → ST-1
- `endterm.html` → End-Term

### Controllers

- `app.js`
- `st1_app.js`
- `endterm_app.js`

### Question banks

- `st1_quiz_questions.js`
- `quiz_questions.js`
- `endterm_quiz_questions.js`
- `endterm_100_questions.js`

### Learning content

- `st1_module_guides.js`
- `module_guides.js`
- `endterm_module_guides.js`

### Visual learning

- `interactive_visualizers.js`
- `visualizers.css`

---

## 🎯 Intended Use

This project is designed as an **exam-preparation and revision companion** for AGAI students.

Recommended workflow:

```text
1. Open the relevant study track
        ↓
2. Read the module guide
        ↓
3. Solve practice questions
        ↓
4. Review incorrect answers
        ↓
5. Use visualizers for difficult concepts
        ↓
6. Attempt continuous exam mode
        ↓
7. Repeat weak topics before the exam
```

---

## 📄 License

No explicit open-source license is currently included in this repository.

If you plan to publish or redistribute the project, add an appropriate `LICENSE` file and update this section accordingly.

---

## 👨‍💻 Project

**AGAI Masterclass — Applied Generative & Agentic AI Systems (24CAI0305)**

Built as an interactive learning and MCQ revision platform for the course syllabus.
