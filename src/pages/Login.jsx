import React, { useState } from "react";
import Cookies from "js-cookie";
import logo from "../images/asvg.svg";
import { Link } from "react-router-dom";
import InputTemplate from "../components/InputTemplate";
import FormButton from "../components/FormButton";
import FormTop from "../components/FormTop";
import { withRouter } from "react-router-dom";
import { attemptLogin } from "../services/attemptLogin.service";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  let history = useHistory();
  const loginUser = async (event) => {
    event.preventDefault();
    const response = await attemptLogin({ email: email, password: password });
    const responseJson = await response.json();
    if (response.status === 200) {
      toast.success("Login Successful", { duration: 1000 });
      Cookies.set("token", responseJson.accessToken);
      history.push("/write");
    } else {
      toast.error(responseJson.msg, { duration: 1000 });
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div>
        {/* component */}
        {/* url('/img/hero-pattern.svg') */}
        <div className="flex min-h-screen bg-white">
          <div
            className="w-1/2 bg-cover md:block hidden"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/720x600/?technology)",
            }}
          />
          <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 p-4">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
            <FormTop
              heading="Log in to your account"
              desc="Welcome Back! Hope you are with great content 😉"
            />

            <form
              action="#"
              className="p-0"
              onSubmit={(event) => {
                loginUser(event);
              }}
            >
              <InputTemplate
                type="text"
                placeholder="Email"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <InputTemplate
                type="password"
                value={password}
                placeholder="Password"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <FormButton />
            </form>

            <Link to="/signup">
              <span className="block  p-5 text-center text-gray-800  text-xs ">
                Don't have an account? Sign up here!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
