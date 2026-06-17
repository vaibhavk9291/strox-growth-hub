const team = [
  {
    name: "Pranav Patil",
    title: "Founder, Podcaster & Content Creator",
    linkedin: "https://www.linkedin.com/in/thecuriouspranav/",
    youtube: "https://www.youtube.com/@thecuriouspranav",
    image: "/pranav.jpg"
  },
  {
    name: "Kunal Manjare",
    title: "Founder & LinkedIn Expert",
    linkedin: "https://www.linkedin.com/in/kunal-manjare-421351270/",
    youtube: "https://www.youtube.com/@Trillionairekunal",
    image: "/kunal.jpg"
  }
];

const AboutUs = () => (
  <section id="about" className="py-24 bg-background border-t border-border">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
        About <span className="text-primary">Us</span>
      </h2>
      <div className="max-w-2xl mx-auto text-center text-base md:text-lg text-muted-foreground bg-card rounded-xl px-6 py-4 border border-border shadow mb-8">
        Over 1 year of providing tech solutions to businesses across the globe.<br />
        Now we are even more faster, efficient, and experienced.
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center bg-card rounded-xl p-6 shadow-lg w-full md:w-1/2">
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-primary"
              loading="lazy"
            />
            <h3 className="font-bold text-lg mb-1">{member.name}</h3>
            <div className="text-sm text-muted-foreground mb-2">{member.title}</div>
            <div className="flex gap-3 justify-center">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary underline">LinkedIn</a>
              {member.youtube && (
                <a href={member.youtube} target="_blank" rel="noopener noreferrer" className="text-primary underline">YouTube</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;
