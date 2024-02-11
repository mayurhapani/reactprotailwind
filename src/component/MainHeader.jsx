import { NavLink, Link } from "react-router-dom";
import "../PR1/App.css";

export default function MainHeader() {
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo">{/* <Link to="/">My Projects</Link> */}</h1>
        <ul>
          <li>
            <NavLink>PR2</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// const nav = document.querySelector(".nav");

// window.addEventListener("scroll", fixNav);

// function fixNav() {
//   if (window.scrollY > nav.offsetHeight + 150) {
//     nav.classList.add("active");
//   } else {
//     nav.classList.remove("active");
//   }
// }
