# 💰 HisabKitab - Personal Finance Management Web App

[🚀 Live Site](https://hisab-kitab-lilac.vercel.app/)

<p align="center">
  <img src="./public/logo.png" alt="HisabKitab Logo" width="200"/>
</p>

**HisabKitab** is a full-stack personal finance tracking application that allows users to manage their income and expenses, visualize financial data, and make better budgeting decisions through an intuitive, secure interface.

---

## 📦 Deployment

The app is deployed on **Vercel**.  
🔗 [https://hisab-kitab-lilac.vercel.app/](https://hisab-kitab-lilac.vercel.app/)

---

## ✨ Features

- 🔐 User authentication and session management via **Clerk**
- 📊 Interactive charts for spending visualization using **Chart.js**
- ➕ Add, edit, and categorize income & expenses
- 🧠 AI-powered tips and analysis using **Gemini API**
- 📧 Email alerts & onboarding with **Resend**
- 🛡️ Advanced protection and DDoS defense via **Arcjet**
- 📱 Fully responsive UI built with **Tailwind CSS**

---

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router), Tailwind CSS
- **Backend:** Prisma ORM, PostgreSQL
- **Authentication:** Clerk
- **APIs & Services:** Gemini API, Resend, Arcjet
- **Data Visualization:** Chart.js
- **Deployment:** Vercel

---

## 📸 Screenshots

### 📊 Dashboard Preview
<img src="./public/banner.jpeg" alt="Finance Tracker" />

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# Database
DATABASE_URL=
DIRECT_URL=

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI Integration
GEMINI_API_KEY=

# Email Service
RESEND_API_KEY=

# Security
ARCJET_KEY=
````

> ⚠️ Keep your API keys secure. Do not commit `.env` to version control.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hisabkitab.git
cd hisabkitab
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

### 4. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to start using the app.

---

## 👨‍💻 Author

**Samadhan Kadam**
🔗 [LinkedIn](https://linkedin.com/in/samadhankadam)
💻 [GitHub](https://github.com/your-username)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
