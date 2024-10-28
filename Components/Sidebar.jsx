import "./TableContent.css";

function Sidebar({ setSelectedTopic }) {
  const topics = [
    { name: "React Native", icon: "home" },
    { name: "React JS", icon: "speedometer2" },
    { name: "Express JS", icon: "table" },
    { name: "Node JS", icon: "grid" },
    { name: "Kotlin", icon: "people-circle" },
    { name: "Flutter", icon: "speedometer2" },
  ];

  return (
    <div className="sidebarContainer">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "350px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="50" height="92">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Table of Content</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {topics.map((topic) => (
            <li key={topic.name} className="nav-item">
              <a
                href="#"
                className="nav-link text-white courses"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTopic(topic.name);
                }}
              >
                <svg
                  className="bi pe-none me-2 courseContainer"
                  width="16"
                  height="16"
                >
                  <use xlinkHref={`#${topic.icon}`}></use>
                </svg>
                {topic.name}
              </a>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
