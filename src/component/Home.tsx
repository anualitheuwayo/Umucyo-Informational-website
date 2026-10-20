import { useEffect, useState } from "react";

type HomeProps = {
  onNavigate: (page: string) => void;
};

const slides = [
  { src: "/images/sections/hero.png", alt: "Cup of tea overlooking tea fields" },
  { src: "/images/sections/image (5).png", alt: "Dairy cows on green hills" },
  { src: "/images/sections/image (6).png", alt: "Fresh tea leaves" },
  { src: "/images/sections/image (7).png", alt: "Farmers picking tea leaves" },
  { src: "/images/sections/image (8).png", alt: "Green farmland beneath a mountain" },
  { src: "/images/sections/image (9).png", alt: "Cows grazing at sunrise" },
];

const SLIDE_INTERVAL_MS = 5000;

export function Home({ onNavigate }: HomeProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero hero-slideshow">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={encodeURI(slide.src)}
            alt={slide.alt}
            className={`hero-slide ${index === current ? "is-active" : ""}`}
          />
        ))}
      </div>

      <div className="container hero-content">
        <h1>Every harvest counted. Every farmer informed.</h1>

        <div className="hero-buttons">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onNavigate("who-we-are")}
          >
            Learn more
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => onNavigate("contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
