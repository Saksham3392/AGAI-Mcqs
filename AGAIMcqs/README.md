# Applied Generative & Agentic AI Systems (24CAI0305) — ST-2 Revision Masterclass

A high-performance, modular interactive web platform for comprehensive syllabus revision and exam preparation (Lectures 24–37).

---

## 🌟 Key Features
- **65 Syllabus Questions & 92 Total Marks**: Fixed syllabus ordering with difficulty tags and marks distribution.
- **8 Module Foundation Guides**: Ground-zero crash course masterclasses with analogies, formulas, and visual diagrams.
- **5 Live Interactive Simulators**:
  - Clickable Self-Attention Heatmap & Sentence Inspector (Module 1)
  - Multi-Head Attention Subspace Inspector (Module 2)
  - ViT 14×14 Patch Slicer Simulator (Module 5)
  - LLM Temperature & Top-p Probability Curve Sampler (Module 6)
  - LoRA Rank ($r$) & VRAM Savings Calculator (Module 8)
- **Live Search & Filter**: Instant search across questions, topics, and lectures.
- **Dark & Light Mode**: Minimalist themes with persistent state.
- **Instant Feedback & Audio**: Color-coded question boxes (Light Green for correct, Light Red for incorrect) with synthesized sound effects and confetti celebration.

---

## 🚀 Deployment Guide

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: AGAI ST-2 Masterclass Revision Web App"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

---

### 2. Deploy on Render (100% Free)

#### Method A: Render Static Site (Recommended & Fastest)
1. Go to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** $\rightarrow$ **Static Site**.
3. Connect your GitHub repository.
4. Set **Publish directory** to `./` or `.` (leave build command blank).
5. Click **Create Static Site** — Your app will be live with a free HTTPS URL in seconds!

#### Method B: Render Docker Web Service
1. Go to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** $\rightarrow$ **Web Service**.
3. Connect your GitHub repository.
4. Select **Docker** environment (Render will automatically detect `Dockerfile` and `render.yaml`).
5. Click **Create Web Service**.

---

### 3. Run Locally with Docker
```bash
# Build the Docker image
docker build -t agai-mcqs .

# Run the container on port 8000
docker run -d -p 8000:80 --name agai_mcqs_app agai-mcqs

# Open in browser
http://localhost:8000
```

Or using **Docker Compose**:
```bash
docker compose up -d
```

---

### 4. Run Locally with Python
```bash
python serve.py
```
Open `http://localhost:8000` in your browser.
