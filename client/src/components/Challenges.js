import React from "react";
// import Instruction from "./Instruction";
import { Link } from "react-router-dom";

function Challenges() {
  return (
    <div className="d-flex">
      {/* <Instruction/> */}
      <div className="row d-flex justify-content-center">
        <Link
          className="card col-md-4 text-decoration-none m-2 shadow"
          style={{ width: "18rem" }}
          to=""
        >
          <div className="card-body">
            <h2 className="card-title">Card title</h2>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Link>
        <Link
          className="card col-md-4 text-decoration-none m-2 shadow"
          style={{ width: "18rem" }}
          to=""
        >
          <div className="card-body">
            <h2 className="card-title">Card title</h2>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Challenges;
