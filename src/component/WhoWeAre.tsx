export function WhoWeAre() {
  return (
    <section id="who-we-are" className="section">
      <div className="container">
        <h2 className="who-we-are-title">WHO WE ARE</h2>

        <div className="content-grid who-row">
          <div className="content-copy">
            <h2>Our Mission</h2>

            <p>
              Our mission is to empower smallholder tea and dairy farmers in Rwanda by bridging the
              gap between traditional cooperative operations and modern, accessible technology. We
              are committed to eliminating the opacity of manual, paper-based record-keeping by
              introducing digital tools that guarantee fairness. By combining IoT weighing scales
              with simple USSD and SMS communication, we ensure that every farmer regardless of
              their phone type or digital literacy can easily verify their harvest weight,
              understand quality deductions, and track their payments. We exist to replace mistrust
              with verifiable truth, ensuring farmers get the fair returns they deserve.
            </p>
          </div>

          <img className="content-image" src="/images/sections/mission.png" alt="Our mission" />
        </div>

        <div className="content-grid who-row vision-row">
          <img className="content-image" src="/images/sections/vision.png" alt="Our vision" />

          <div className="content-copy">
            <h2>Our Vision</h2>

            <p>
              We envision a future where Rwanda's agricultural cooperatives operate with complete
              transparency and mutual trust. In this future, every smallholder farmer whether they
              use a basic feature phone or a smartphone has the power to verify their harvest, track
              their earnings, and understand their cooperative’s performance in real time. We see a
              thriving agricultural sector where data-driven transparency eliminates disputes,
              prevents unfair losses, and empowers farmers to build sustainable, prosperous
              livelihoods for their families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
