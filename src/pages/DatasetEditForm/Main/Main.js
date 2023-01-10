import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

function Main() {
  return (
    <section className="backGround">
      <nav className="nav">
        <h5>InternShip portfolio</h5>
        <ul className="navRightList">
          <li>ENG</li>
          <li onClick={() => alert("비회원 모드 입니다")}>Visitor Mode</li>
        </ul>
      </nav>
      <section className="mainContainer">
        <p>
          Data Scheduling <br /> Program
        </p>
        <h6>
          * It is a portfolio site based on a program developed in actual
          business cooperation.
        </h6>
        <Link to="/studio">
          <button className="mainStartBtn">Start Scheduling</button>
        </Link>
      </section>
    </section>
  );
}

export default Main;
