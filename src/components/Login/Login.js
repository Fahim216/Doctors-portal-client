import React from "react";

import background from "../../images/Group 140.png";

const Login = () => {
  return (
    <section>
      <div className="container ">
        <div className="row mt-5   ">
          <div className="col-md-6 mt-5 pt-5 pb-4 ps-5 fs-4">
            <h2>Login Form</h2>
            <form action="">
              <input type="email" name="email" placeholder="Email" id="" />
              <br />{" "}
              <input
                className="mt-2"
                type="password"
                name="password"
                placeholder="Password"
                id=""
              />
              <br />
              <input
                className="mt-2 btn btn-primary"
                type="submit"
                value="submit"
              />
            </form>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={background} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
