import { NavLink } from "react-router-dom";
import "../PR1/App.css";

export default function MainHeader() {
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo">
          <NavLink to="/">My Projects</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/">PR1</NavLink>
            <NavLink to="/pr2">PR2</NavLink>
            <NavLink to="/pr3">PR3</NavLink>
            <NavLink to="/pr4">PR4</NavLink>
            <NavLink to="/pr5">PR5</NavLink>
            <NavLink to="/pr6">PR6</NavLink>
            <NavLink to="/tictoktek">TICTOKTEK</NavLink>
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
