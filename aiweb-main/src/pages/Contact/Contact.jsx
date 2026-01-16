import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <header>
        <h1 id="contact-heading">Contact Us</h1>
      </header>

      <article className="contact-card" role="region" aria-label="Contact information">
        <p className="contact-email">
          <strong>Email:</strong>{' '}
          <a href="mailto:krithomedhvnrvjiet@gmail.com">📧 krithomedhvnrvjiet@gmail.com</a>
        </p>

        <h2>Phone Contacts</h2>
        <ul className="contact-list">
          <li>
            <span className="contact-name">Shruthika</span> — <a href="tel:+919573288738">+91 95732 88738</a>
          </li>
          <li>
            <span className="contact-name">Neehar</span> — <a href="tel:+918328089874">+91 83280 89874</a>
          </li>
          <li>
            <span className="contact-name">Chaitanya</span> — <a href="tel:+919347290006">+91 93472 90006</a>
          </li>
          <li>
            <span className="contact-name">Bhanusree</span> — <a href="tel:+919381331830">+91 93813 31830</a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Contact;
