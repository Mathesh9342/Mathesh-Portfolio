import '../styles/stats.css';

function Stats() {
  const stats = [
    { number: '9+', label: 'Months Experience' },
    { number: '60L+', label: 'Project Value' },
    { number: 'Lakhs+', label: 'End Users Served' },
    { number: '10+', label: 'Modules Delivered' },
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;