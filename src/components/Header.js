import React from "react";
import Menu from "./Menu";
// import "./Style.css"

const Header = (  {dark,setDark}  ) => {
  function toggleDark(e){
    setDark(!dark)
    e.target.innerText=dark ? "dark": "light"
  }

  return (
    <>
      <header className={`${dark && "dark-bg"}`}>
        <div className="logo">
          <p className={`${dark && "text-white"}`}>navbar</p>
        </div>
        <Menu />
        <button>
          <a href="/"> Get started</a>
        </button>
        <div className="content-items">
          <img src="https://assets.entrepreneur.com/content/3x2/2000/20150429160658-website-traffic.jpeg" alt="logo"/>
        </div>
        <button onClick={toggleDark}>Dark</button>
      </header>
      <section>

      </section>
    </>
  );
};

export default Header;
