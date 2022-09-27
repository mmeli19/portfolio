import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Interests</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">History</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a
            href="https://docs.google.com/document/d/1MUU6YTNIz4m_9RnH0LyVJ4wVteNdJxhx/edit?usp=sharing&ouid=106990396813587378974&rtpof=true&sd=true"
            target={"_blank"}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
