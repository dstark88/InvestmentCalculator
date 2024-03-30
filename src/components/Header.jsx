import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header>
      <div id="masthead">
        <a
          className="navbar-brand"
          href="https://dstark88.github.io/portfolio/"
        >
          Denise Stark
        </a>
        <nav className="navbar">
          <a href="https://dstark88.github.io/portfolio/" target="blank">
            Portfolio
          </a>
        </nav>
      </div>
      <div id="header">
        <img src={logo} alt="Logo showing a money bag" />
        <h1>Investment Calculator</h1>
      </div>
    </header>
  );
}
