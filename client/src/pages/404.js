import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import pagenotfound from "../assets/404.svg";

function PageNotFound() {
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h2>Oh No! Error 404.</h2>
          <p className="my-2">The page your looking for could not be found</p>
          <Link to="/">
            <Button className="btn-rounded my-2" color="primary">
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="col-md-6">
          <img className="img-fluid" src={pagenotfound} alt="pagenotfound" />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
