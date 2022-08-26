import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <div className="heading">
          <h2>Welcome to App Name</h2>
          <p>
            Get ahead of the curve.Join the next generation of health heroes.
          </p>
        </div>
        <div className="imgContainer">
          <img src="images/Frame.png" alt="hospital" />
        </div>
      </div>
      <div className="right">
        <div className="right_heading">
          <h2>Sign-in to your account</h2>
        </div>
        <section className="right_form">
          <form className="login_form">
            <input
              className="right_form_field"
              maxLength="25"
              placeholder="Username"
              required
            />
            <input
              className="right_form_field"
              maxLength="10"
              placeholder="Password"
              type="password"
            />
            <select className="right_form_input_src" id="units" name="units">
              <option value="Celcius">Celcius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="unit" selected>
                Select Unit Name
              </option>
            </select>
            <Link to="/dashboard">
              <input
                className="right_form_btn_src"
                type="submit"
                value="Sign In"
              />
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
