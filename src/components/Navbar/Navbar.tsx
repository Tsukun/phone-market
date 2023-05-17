import * as React from "react";
import "./Navbar.css";
import { ReactComponent as PrivateOfficeLogo } from "../../icons/private_office.svg";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header_rows">
            <div className="row">
              <div className="item_main text">Каталог</div>
            </div>
            <div className="row">
              <div className="item_text text ">СРАВНЕНИЕ</div>
            </div>
            <div className="row">
              <div className="item_text text">Личный кабинет</div>
              <div className="item_logo">
                <PrivateOfficeLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
