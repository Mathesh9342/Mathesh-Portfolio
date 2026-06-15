import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p><strong>Email:</strong> matheshravi2003@gmail.com</p>
            <p><strong>Phone:</strong> +91 9342760911</p>
            <p><strong>Location:</strong> Chennai, Tamil Nadu</p>
            <p><strong>GitHub:</strong> github.com/Mathesh9342</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/mäthësh-ravi-287751229/</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="6" placeholder="Message"></textarea>
            <button className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;