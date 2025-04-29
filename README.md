# 🧪 Playwright E2E Demo - SauceDemo Automation

[![CI - Playwright Tests](https://github.com/mifyusuf/playwright-e2e-demo/actions/workflows/playwright.yml/badge.svg)](https://github.com/mifyusuf/playwright-e2e-demo/actions)

This repository contains end-to-end tests for the [SauceDemo](https://www.saucedemo.com/) application using [Playwright](https://playwright.dev/). It demonstrates login flows, cart operations, and the checkout process — automated using modern, scalable test practices.

---

## 📦 Tech Stack

- 🎭 Playwright Test Runner (TypeScript)
- 🌐 SauceDemo test site
- 🔍 HTML Reporting
- ⚙️ GitHub Actions CI Integration

---

## 🚀 Features

- ✅ Login with valid and invalid credentials
- 🛒 Cart and Checkout flow automation
- 🧪 Page assertions for validation
- 📋 HTML test report generation
- 🤖 CI/CD integration with GitHub Actions

---

## 📁 Project Structure

```
playwright-e2e-demo/
├── tests/
│   ├── login.spec.ts
│   └── checkout.spec.ts
├── playwright.config.ts
├── package.json
├── .gitignore
└── .github/
    └── workflows/
        └── playwright.yml
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mifyusuf/playwright-e2e-demo.git
cd playwright-e2e-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests locally

```bash
npx playwright test
```

### 4. View the HTML report

```bash
npx playwright show-report
```

---

## 🔄 GitHub Actions CI

This repo includes a CI workflow that:

- Installs dependencies
- Installs Playwright browsers
- Runs all tests
- Uploads the HTML report as a downloadable artifact

You can find it in:  
`.github/workflows/playwright.yml`

🔗 [View Actions tab](https://github.com/mifyusuf/playwright-e2e-demo/actions)



---

## 📌 To Do / Improvements

- [ ] Add logout test
- [ ] Expand cart edge case tests
- [ ] Integrate with GitHub Pages to publish reports
- [ ] Refactor repetitive login steps with fixtures

---

## 👨‍💻 Author

**Miftahul Yusuf**  
💼 QA Automation Engineer  
🌐 [LinkedIn](https://www.linkedin.com/in/mifyusuf/)  
📧 miftahulyusuf@gmail.com

---

## 📝 License

This project is for educational and portfolio purposes. No license required.