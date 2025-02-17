import React from "react";
import coin from "../../assets/bg-coin-2.svg";

const Header = () => {
  return (
    <header className="header-nt">
      <div className="h-text-nt">Non - Tech</div>

      <img className="ace-img-nt img-2-nt" src={coin} alt="ace" />
      <img className="ace-img-nt img-1-nt" src={coin} alt="ace" />
    </header>
  );
};

export default Header;
