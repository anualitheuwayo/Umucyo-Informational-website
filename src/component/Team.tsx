import "./Team.css";

const members = [
  {
    name: "Quinta Susan",
    role: "Software Engineer",
    image: "/images/team/quinta.png",
  },
  {
    name: "Gahire Jolie",
    role: "Software Engineer",
    image: "/images/team/jolie.png",
  },
  {
    name: "Franca Sirila",
    role: "Backend Engineer",
    image: "/images/team/franca.png",
  },
  {
    name: "Anualithe Uwayo",
    role: "Software Engineer",
    image: "/images/team/anualithe.png",
  },
  {
    name: "Christabel Aluoch",
    role: "Software Engineer",
    image: "/images/team/christabel.png",
  },
];

export function Team() {
  return (
    <section id="team" className="team-section">
      <div className="team-inner">
        <h2 className="team-title">MEET THE TEAM</h2>

        <div className="team-grid">
          {members.map((member) => (
            <div key={member.name} className="team-member">
              <img src={member.image} alt={member.name} className="member-photo" />
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
