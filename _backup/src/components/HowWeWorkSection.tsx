import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Deep dive into your brand, audience & goals.",
    time: "1 WEEK",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Sitemap, content plan & design direction.",
    time: "1 WEEK",
  },
  {
    number: "03",
    title: "Design",
    desc: "Pixel-perfect Figma mockups, fast feedback.",
    time: "2–3 WEEKS",
  },
  {
    number: "04",
    title: "Build",
    desc: "Hand-coded, blazing-fast with best-in-class SEO.",
    time: "3–4 WEEKS",
  },
  {
    number: "05",
    title: "Launch & Grow",
    desc: "Go live + ongoing analytics & A/B support.",
    time: "ONGOING",
  },
];

export default function HowWeWorkSection() {
  // All steps have the same time now
  const steps = [
    { title: "Discovery" },
    { title: "Strategy" },
    { title: "Design" },
    { title: "Build" },
    { title: "Launch & Grow" },
  ];
  return (
    <section className="how-we-work-carousel-root">
      <div className="how-we-work-carousel-inner">
        <div className="how-we-work-carousel-label">// HOW WE WORK</div>
        <h2 className="how-we-work-carousel-heading">
          <span className="bold">A proven process</span>, <span className="accent">from idea to impact.</span>
        </h2>
        <div className="carousel-viewport">
          <div className="carousel-track">
            {steps.map((step, i) => (
              <div className="carousel-step" key={step.title}>
                <div className="carousel-circle">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-timeline">
          <span className="timeline-label">1 WEEK</span>
        </div>
      </div>
      <style>{`
        .how-we-work-carousel-root {
          background: #1a1a1a;
          color: #fff;
          padding: 44px 0 0 0;
          font-family: inherit;
        }
        .how-we-work-carousel-inner {
          max-width: 600px;
          margin: 0 auto;
          padding: 0 0 32px 0;
        }
        .how-we-work-carousel-label {
          color: #888;
          font-size: 1rem;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .how-we-work-carousel-heading {
          text-align: left;
          font-size: 2.1rem;
          font-weight: 800;
          margin-bottom: 38px;
          line-height: 1.13;
        }
        .how-we-work-carousel-heading .bold {
          font-weight: 800;
          color: #fff;
        }
        .how-we-work-carousel-heading .accent {
          color: #f4876a;
          font-weight: 800;
        }
        .carousel-viewport {
          width: 100%;
          overflow-x: auto;
          overflow-y: visible;
          padding: 0 0 24px 0;
          background: transparent;
        }
        .carousel-track {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 32px;
          min-width: 700px;
          padding-bottom: 16px;
        }
        .carousel-step {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .carousel-circle {
          background: #4a1616;
          color: #fff;
          border-radius: 50%;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.08rem;
          font-weight: 500;
          text-align: center;
          letter-spacing: 0.03em;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
        }
        .carousel-timeline {
          text-align: center;
          margin-top: 0;
        }
        .timeline-label {
          color: #f4876a;
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 0.04em;
        }
        @media (max-width: 700px) {
          .how-we-work-carousel-inner {
            max-width: 100vw;
            padding: 0 0 24px 0;
          }
          .carousel-track {
            min-width: 500px;
            gap: 18px;
          }
          .carousel-circle {
            width: 100px;
            height: 100px;
            font-size: 0.98rem;
          }
        }
      `}</style>
    </section>
  );
}
