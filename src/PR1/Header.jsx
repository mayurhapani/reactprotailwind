export default function Header() {
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo">
          <a href="#">My website</a>
        </h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
