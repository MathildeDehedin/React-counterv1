import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <div className="header">
        <FontAwesomeIcon className="calculator" icon="calculator" />
        <h1>React Counter</h1>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default Header;
