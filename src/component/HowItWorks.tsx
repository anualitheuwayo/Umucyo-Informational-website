import "./HowItWorks.css";

const steps = [
  {
    title: "Register Farmers",
    text: "Cooperatives register farmers and link them to their collection points.",
  },
  {
    title: "Record Every Delivery",
    text: "IoT-enabled weighing captures produce quantities and links them to each farmer's record.",
  },
  {
    title: "Share Transaction Updates",
    text: "Farmers receive SMS updates on delivery quantities and recorded quality results.",
  },
  {
    title: "Manage Payments",
    text: "Payment records are linked to farmers, who can raise questions about deliveries, quality, or payments.",
  },
  {
    title: "Discover Production Trends",
    text: "Cooperatives review historical records, which helps them make better decisions.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="hiw">
      <div className="hiw-inner">
        <h2 className="hiw-title">HOW IT WORKS</h2>

        <ol className="hiw-steps">
          {steps.map((step, index) => (
            <li key={step.title} className="hiw-step">
              <h3>
                <span className="hiw-number">{index + 1}.</span> {step.title}
              </h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
