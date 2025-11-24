# 🌐 Prime Digital Consultant Website
Modern company website built with **Next.js 16**  
Minimal • Glassmorphism • Blue Themed UI

---

## ✨ Overview
This project contains the official website for **Prime Digital Consultant Co., Ltd.**

The website is designed with:

- Clean minimal UI  
- Glassmorphism elements  
- Blue / Digital aesthetic  
- Next.js App Router  
- Fully responsive design  
- Optimized performance

---

## 🚀 Tech Stack

| Technology | Version | Description |
|-----------|---------|-------------|
| **Next.js** | `16.0.2` | React full-stack framework |
| **React** | `18.x` | UI library |
| **Node.js** | `22.15.1` | Runtime environment |
| **npm** | `11.5.2` | Package manager |
| **Tailwind CSS** | latest | Styling framework |
| **TypeScript** | latest | Static typing |
| **Vercel** | optional | Deployment |


## 🔧 Requirements

Before installing, ensure you have:

- Git  
- **Node.js 22.15.1** (auto via `.nvmrc`)  
- npm `11.5.2`  
- nvm (recommended)  
- A code editor (VS Code recommended)

---

## 🛠️ Installation (New Machine Setup)

### 1️⃣ Clone the repository

```bash
git clone <REPO_URL>.git
cd <PROJECT_FOLDER>
2️⃣ Set Node.js version from .nvmrc
bash
Copy code
nvm install
nvm use
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Setup environment variables
bash
Copy code
cp .env.example .env.local
Fill values in .env.local (never commit this file):

makefile
Copy code
NEXT_PUBLIC_API_BASE_URL=
API_SECRET_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DATABASE_URL=
5️⃣ Run development server
bash
Copy code
npm run dev
App will be available at:
http://localhost:3000

🧪 Scripts
Command	Description
npm run dev	Start development server
npm run build	Build production output
npm run start	Run production server
npm run lint	Run ESLint

📦 Environment & Version Locking
.nvmrc
Copy code
22.15.1
package-lock.json
Locks all dependency versions.

.env.local
Contains sensitive keys. Do not commit.

✔ Recommended Workflow
1) Before starting work
git checkout dev
git pull

2) After making changes
git add .
git commit -m "update: your description"
git push

3) When ready to update production

Merge dev → main

Option A: via GitHub Pull Request (recommended)
Option B: via command line:

git checkout main
git pull
git merge dev
git push

✔ Check your current branches
git branch

✔ Create dev branch (if not exists)
git checkout -b dev
git push -u origin dev

🧩 UI / Design System
Blue + Glassmorphism

Rounded-2xl components

Tailwind CSS utilities

Reusable components

Fully responsive

📬 Contact
Prime Digital Consultant Co., Ltd.
Digital Transformation • Data Automation • Training Solutions

(Insert company contact info)