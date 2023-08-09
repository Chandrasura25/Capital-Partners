import navbarStyle from "../styles/Navbar.module.css";
const Navbar = () => {
  // const menuToggle = document.querySelector(".menuToggle");
  // const header = document.querySelector("header");

  // menuToggle.addEventListener("click", function () {
  //   header.classList.toggle("active");
  // });
  return (
    <>
      <header className={navbarStyle.header}>
        <a href="#" className={navbarStyle.logo}>
          My Logo
        </a>
        <div className={navbarStyle.menuToggle}></div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">
                Dropdown ▼
              </a>
              <ul>
                <li>
                  <a href="#">Product 01</a>
                </li>
                <li>
                  <a href="#">Product 02</a>
                </li>
                <li>
                  <a href="#">
                    Product 03 <b>+</b>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Submenu 01</a>
                    </li>
                    <li>
                      <a href="#">Submenu 02</a>
                    </li>
                    <li>
                      <a href="#">Submenu 03</a>
                    </li>
                    <li>
                      <a href="#">Submenu 04</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">
                Blog ▼
              </a>
              <ul>
                <li>
                  <a href="#">Post Link 01</a>
                </li>
                <li>
                  <a href="#">Post Link 02</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
