# Umucyo Informational Website

## Overview

Smallholder tea and dairy farmers rely on cooperatives to collect and process their produce. Umucyo proposes a more transparent way to record delivery transactions and communicate relevant information to farmers.
Umucyo is an informational website introducing a proposed IoT-enabled PWA(Progressive Web App) designed to improve transparency and communication between tea and dairy farmers, collection-point agents, and cooperatives in Rwanda.

Umucyo is an informational website introducing a proposed IoT-enabled PWA(Progressive Web App) designed to improve transparency and communication between tea and dairy farmers, collection-point agents, and cooperatives in Rwanda

The website explains Umucyo's mission, vision, proposed solution and the team behind the project. It also provides information about how the platform is intended to support traceable produce transactions, improve access to transaction records and strengthen trust between farmers and cooperatives.

## Features

- **Home:** Introduces Umucyo and its purpose.
- **Who We Are:** Explains the project’s mission, vision and background.
- **How It Works:** Describes how the proposed platform connects farmers, collection-point agents, and cooperatives.
- **Frequently Asked Questions (FAQ):** Answers common questions about Umucyo and its proposed solution.
- **Team:** Introduces the engineers behind the project.
- **Contact Us:** Provides contact information and ways to reach the team.

## Technology Stack

- **TypeScript:** Provides type-safe JavaScript development for the website.
- **CSS:** Handles styling and presentation.
- **JavaScript:** Supports website functionality.
- **HTML:** Provides the structure of the website.
- **Vite:** Development server and build tool.
- **npm:** Manages project dependencies and development scripts.

## Project Structure

```text
sulwe-informational-website/
├── public/
├── src/
│   ├── component/
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── HowItWorks.css
│   │   ├── HowItWorks.tsx
│   │   ├── Navbar.tsx
│   │   ├── WhatWeDo.css
│   │   ├── WhatWeDo.tsx
│   │   └── WhoWeAre.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── style.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── eslint.config.mjs
└── README.md
```

## Live Website

https://sulwe-informational-website.vercel.app/

## Getting Started

Follow these instructions to run the Umucyo informational website on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/akirachix/sulwe-informational-website.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd sulwe-informational-website
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open the website**

   Open the local URL displayed in your terminal. By default, Vite serves the website at:

   ```text
   http://localhost:5173/
   ```
