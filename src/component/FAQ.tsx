import "./FAQ.css";

const questions = [
  {
    question: "Who can use Umucyo?",
    answer:
      "Umucyo is designed for smallholder tea and dairy farmers, cooperatives, and the teams that support them through record keeping, quality checks, and payments.",
  },
  {
    question: "How does Umucyo help farmers?",
    answer:
      "It gives farmers timely visibility into their harvest weight, quality outcomes, and payment records through simple mobile channels and cooperative-managed data capture.",
  },
  {
    question: "How does Umucyo help cooperatives?",
    answer:
      "Cooperatives can track deliveries centrally, reduce disputes, improve transparency, and make better operational decisions with clearer historical data.",
  },
  {
    question: "How is my information protected?",
    answer:
      "Data is recorded and managed in a structured system that supports traceability and accountability while protecting farmer information through controlled access and secure processing.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <h2 className="faq-title">FAQ</h2>

        <div className="faq-layout">
          <div className="faq-list">
            {questions.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    ▾
                  </span>
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>

          <img
            src="/images/sections/faq-tea.png"
            alt="Cup of tea"
            className="faq-image"
          />
          <img src="/images/sections/faq-tea.png" alt="Cup of tea" className="faq-image" />
        </div>
      </div>
    </section>
  );
}
