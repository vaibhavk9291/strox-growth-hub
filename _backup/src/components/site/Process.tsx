
import React, { useEffect, useRef } from "react";

const steps = [
  { title: "Discovery" },
  { title: "Strategy" },
  { title: "Design" },
  { title: "Build" },
  { title: "Launch & Grow" },
];

const Process = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame: number;
    let pos = 0;
    const speed = 0.3; // px per frame, adjust for smoothness
    const animate = () => {
      pos -= speed;
      // Reset to start for infinite loop
      if (track.scrollWidth - Math.abs(pos) <= track.parentElement!.clientWidth) {
        pos = 0;
      }
      track.style.transform = `translateX(${pos}px)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Duplicate steps for seamless loop
  const allSteps = [...steps, ...steps];

  return (
    <section className="how-we-work-carousel-root">
      <div className="how-we-work-carousel-inner">
        <div className="how-we-work-carousel-label">// HOW WE WORK</div>
        <h2 className="how-we-work-carousel-heading">
          <span className="bold">A proven process</span>, <span className="accent">from idea to impact.</span>
        </h2>
        <div className="carousel-viewport">
          <div className="carousel-track animated-track" ref={trackRef}>
            {allSteps.map((step, i) => (
              <div className="carousel-step" key={step.title + i}>
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
          background: #181616;
          color: #fff;
          padding: 44px 0 0 0;
          font-family: inherit;
        }
        .how-we-work-carousel-inner {
          max-width: 700px;
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
          font-size: 2.2rem;
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
          overflow: hidden;
          padding: 0 0 24px 0;
          background: transparent;
          border-radius: 1.5rem;
        }
        .carousel-track {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 32px;
          min-width: 700px;
          padding-bottom: 16px;
          will-change: transform;
        }
        .carousel-step {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .carousel-circle {
          background: linear-gradient(135deg, #2d1616 60%, #f4876a 120%);
          color: #fff;
          border-radius: 50%;
          width: 130px;
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.13rem;
          font-weight: 600;
          text-align: center;
          letter-spacing: 0.03em;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.13);
          border: 2px solid #2d1616;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .carousel-circle:hover {
          box-shadow: 0 4px 32px 0 #f4876a44;
          transform: scale(1.07) rotate(-2deg);
        }
        .carousel-timeline {
          text-align: center;
          margin-top: 0;
          position: relative;
        }
        .carousel-timeline:before {
          content: '';
          display: block;
          width: 90%;
          height: 3px;
          background: #444;
          margin: 0 auto 8px auto;
          border-radius: 2px;
        }
        .timeline-label {
          color: #f4876a;
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.04em;
          display: block;
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
            width: 90px;
            height: 90px;
            font-size: 0.98rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
