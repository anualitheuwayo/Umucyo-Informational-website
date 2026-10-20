import "./WhatWeDo.css";

const services = [
  {
    title: "Empowering Farmers",
    text: "We digitize agricultural supply chains to give tea and dairy smallholders a direct, transparent connection to their cooperatives.",
    image: "/images/sections/farmers.png",
    alt: "Cows grazing on green hills",
  },
  {
    title: "Digital Weighing",
    text: "We use IoT load sensors at collection points to capture exact weights instantly, eliminating manual entry errors and guesswork.",
    image: "/images/sections/scale.png",
    alt: "Digital weighing scale",
  },
  {
    title: "Centralized Control",
    text: "We provide cooperatives with a powerful web dashboard to track real-time metrics, analyze yield trends, and manage mobile payouts.",
    image: "/images/sections/dashboard.png",
    alt: "Umucyo cooperative dashboard",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="wwd">
      <div className="wwd-inner">
        <h2 className="wwd-title">What we do</h2>

        <div className="wwd-cards">
          {services.map((service) => (
            <article key={service.title} className="wwd-card">
              <h3>{service.title}</h3>
              <img src={service.image} alt={service.alt} loading="lazy" />
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
