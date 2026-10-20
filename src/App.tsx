import { useEffect, useState } from "react";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { WhoWeAre } from "./component/WhoWeAre";
import { WhatWeDo } from "./component/WhatWeDo";
import { HowItWorks } from "./component/HowItWorks";
import { Team } from "./component/Team";
import { FAQ } from "./component/FAQ";
import { ContactUs } from "./component/ContactUs";
import { Footer } from "./component/Footer";

const SECTION_IDS = ["home", "who-we-are", "what-we-do", "how-it-works", "team", "faq", "contact"];

function App() {
  const [activePage, setActivePage] = useState("home");

  function handleNavigate(page: string) {
    document.getElementById(page)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActivePage(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <main>
        <Home onNavigate={handleNavigate} />
        <WhoWeAre />
        <WhatWeDo />
        <HowItWorks />
        <Team />
        <FAQ />
        <ContactUs />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
