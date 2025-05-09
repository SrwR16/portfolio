const Freelancer = () => {
  const projects = [
    {
      title: "Instituto de Proteção ao Jogador",
      link: "https://ipjbr.com.br",
    },
    {
      title: "UFRJ — LARHCO",
      link: "https://larhco.iq.ufrj.br",
    },
    {
      title: "Bracell — Floresta Sempre Viva",
      link: "https://florestasempreviva.com.br",
    },
  ];

  return (
    <div className="projects-wrapper">
      <div className="freelancer-projects">
        <h2 className="title">~ freelancer</h2>
        <div className="minor-projects-area">
          {projects.map((item, index) => (
            <div className="minor-project" key={index}>
              <div className="minor-project-title" style={{ cursor: "default" }}>
                <span className="orange" style={{ color: "#d3d3d5", cursor: "default" }}>
                  {item.title}
                </span>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
