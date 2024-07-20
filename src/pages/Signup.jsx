import React, { useState } from "react";
import logo from "../images/asvg.svg";
import { Link } from "react-router-dom";
import InputTemplate from "../components/InputTemplate";
import FormButton from "../components/FormButton";
import FormTop from "../components/FormTop";
import { attemptSignUp } from "../services/attemptSignUp.service";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [description, setDescription] = useState();
  const [profileImage, setProfileImage] = useState();
  let history = useHistory();

  const signUp = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("description", description);
    formData.append("role", "blogger");
    const response = await attemptSignUp(formData);
    const responseJson = await response.json();

    if (response.status === 201) {
      toast.success(responseJson.msg, { duration: 1000 });
      history.push("/login");
    } else {
      toast.error(responseJson.msg, { duration: 1000 });
    }
  };

  function matchPassword() {
    if (password != confirmPassword) {
      alert("Passwords did not match");
    }
  }

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
                "url(https://source.unsplash.com/720x600/?business)",
            }}
          />
          <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 p-4">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="md:w-1/2 max-w-lg mx-auto mt-10 px-4 py-5 shadow-none">
            <FormTop
              heading="Create an account for free"
              desc="Explore rticle! Make articles! Become Popular!"
            />

            <form
              action="#"
              className="p-0"
              onSubmit={(event) => {
                signUp(event);
              }}
            >
              <InputTemplate
                type="text"
                placeholder="First Name"
                required
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <InputTemplate
                type="text"
                placeholder="Last Name"
                required
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <InputTemplate
                type="email"
                placeholder="Email"
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <InputTemplate
                id="pswd1"
                type="password"
                placeholder="Password"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <InputTemplate
                id="pswd2"
                type="password"
                placeholder="Confirm Password"
                required
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />

              <div className="mt-5">
                <textarea
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                  name="description"
                  rows={4}
                  cols={50}
                  placeholder="Let people know about you! Introduce yourself"
                  style={{ resize: "none" }}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>

              <label>Your Selfie over here 😁</label>
              <InputTemplate
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setProfileImage(event.target.files[0]);
                }}
              >
                {" "}
              </InputTemplate>

              <FormButton onClick={matchPassword} />
            </form>
            <Link to="/login">
              <span className="block  p-5 text-center text-gray-800  text-xs ">
                Already have an account? Sign in here!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
