import '../styles/whyhireme.css';

function WhyHireMe() {
  const points = [
    'Strong Backend Engineering',
    'Production Bug Resolution',
    'Scalable API Development',
    'Clean Maintainable Code',
  ];

  return (
    <section className="why-hire-me"  id="why-hire-me">
      <div className="container">
        <h2 className="section-title">Why Hire Me?</h2>

        <div className="why-grid">
          {points.map((point, index) => (
            <div className="why-card" key={index}>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyHireMe;