import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8090/api/v1/auth/authenticate", { email, password });
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      // redirect user to the desired page after successful login
      router.push('/shop');
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="login">
        <div className="wrapper">
          <div
            className="login-form js-img"
            style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
          >
            <form onSubmit={handleSubmit}>
              <h3>log in with</h3>

              {/* social login buttons */}
              <div className="box-field">{/* SocialLogin component here */}</div>

              {/* email or nickname input */}
              <div className="box-field">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email or nickname"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* password input */}
              <div className="box-field">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* remember me checkbox */}
              <label className="checkbox-box checkbox-box__sm">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>

              {/* submit button */}
              <button className="btn" type="submit" onClick={() => alert('You are successfully logged in!')}>
              Log in
            </button>


              {/* error message */}
              {error && <div className="text-danger">{error}</div>}

              {/* registration and forgot password links */}
              <div className="login-form__bottom">
                <span>
                  No account?{" "}
                  <a onClick={() => window.location.href = "/registration"}>
                    Register now
                  </a>
                </span>
                <a href="#">Lost your password?</a>
              </div>
            </form>
          </div>
        </div>
        <img
          className="promo-video__decor js-img"
          src="/assets/img/promo-video__decor.png"
          alt=""
        />
      </div>
    </>
  );
};

