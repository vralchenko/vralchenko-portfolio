# VIKTOR RALCHENKO - SENIOR SOFTWARE DEVELOPER PORTFOLIO

This is a personal portfolio website for Viktor Ralchenko, a Senior Software Developer with 20 years of experience, showcasing his expertise in full-stack architecture, microservices, and high-performance data solutions.

The design is inspired by the modern, card-based aesthetic of Jan Prysowecki's portfolio.

---

## 🚀 LIVE DEMO

[View Live Demo Here](https://viktor-portfolio.vercel.app/) (Replace with your Vercel URL)

---

## 💡 KEY FEATURES

* **Modern, Dark-Themed UI:** Clean, responsive, card-based layout designed for high readability.
* **Full-Stack Capabilities:** Demonstrates expertise across backend (.NET, C#) and frontend (React, TypeScript).
* **Functional Contact Form:** Serverless email submission via **Resend** (API Routes/Server Actions).
* **Interactive Tech Stack:** Detailed technology matrix with tooltips, showcasing proficiency in over 30 tools (Cloud, Databases, DevOps, Testing).
* **Optimized Performance:** Built with Next.js App Router for fast, optimized deployment on Vercel.

---

## 🛠️ TECH STACK

The application is built using the latest Next.js features and industry-standard tools.

### Frontend & UI

| Stack | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | React framework for server-side rendering and routing. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid styling. |
| **Components**| shadcn/ui | Pre-styled, accessible component library built on Tailwind and Radix. |
| **Flags** | react-world-flags | Used for displaying language proficiency icons. |

### Backend & Deployment

| Stack | Technology | Purpose |
| :--- | :--- | :--- |
| **Email Service** | Resend | Reliable API for handling portfolio contact form submissions. |
| **Environment**| Node.js | Runtime environment used for running Next.js and tools. |
| **Deployment** | Vercel | Hosting platform optimized for Next.js applications. |
| **CI/CD** | GitHub Actions | Automated workflow used for continuous integration/deployment. |

---

## ⚙️ GETTING STARTED

### Prerequisites

1.  Node.js (LTS version)
2.  A Resend API Key for the contact form.

### Local Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/vralchenko/viktor-portfolio.git](https://github.com/vralchenko/viktor-portfolio.git)
    cd viktor-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set Environment Variables:**
    Create a file named **`.env.local`** in the root directory and add your Resend key:
    ```
    RESEND_API_KEY="YOUR_RESEND_API_KEY_HERE"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.