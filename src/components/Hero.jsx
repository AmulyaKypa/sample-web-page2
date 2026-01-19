import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <h1 className="hero-heading">
          <span className="line line-1">ENGINEERING</span>
          <span className="line line-2">THE NEXT</span>
          <span className="line line-3">INTELLIGENCE</span>
        </h1>

        <p className="hero-description">
          Join the brightest minds for a week of innovation, cutting-edge AI
          workshops, hackathons, and the future of human–AI collaboration.
        </p>

        <button className="hero-btn">View Events</button>
      </div>
    </section>
  );
}

export default Hero;
