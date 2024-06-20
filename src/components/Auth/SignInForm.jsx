"use client";
import { useState } from "react";
import InputsLabel from "./InputsLabel";
import IsEmpty from "./IsEmpty";
import ParagraphAccess from "./ParagraphAccess";
import { Link } from "react-router-dom";
export default function SignInForm() {
  const [userName, setUserName] = useState("");
  const [value, setValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState("");
  const [isClicked, setIsClicked] = useState("");
  const handleSubmit = (e) => {
    setIsClicked(!isClicked);
    e.preventDefault();
    setIsEmpty(!isEmpty);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPasswordValue(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <>
      {isClicked === true ? (
        <>
          {value === "" || (passwordValue === "") === true ? (
            <>
              <form className="mt-10 ">
                <IsEmpty />
                <InputsLabel
                  value={userName}
                  handleChange={handleUserName}
                  label={"Name"}
                  type={"text"}
                  placeholder={"Full name"}
                  justHide={"hidden"}
                />
                <InputsLabel
                  value={value}
                  handleChange={handleChange}
                  label={"Email"}
                  type={"email"}
                  placeholder={"Your email address"}
                  justHide={"hidden"}
                />

                <InputsLabel
                  value={passwordValue}
                  handleChange={handlePassword}
                  label={"Password"}
                  type={"password"}
                  justHide={"cursor-pointer"}
                  containerClass={"absolute top-[34.8rem] left-[30.5rem]"}
                  placeholder={"xxxxxxxxxxx"}
                />
                <InputsLabel
                  value={confirmPassword}
                  handleChange={handleConfirmPassword}
                  label={"Confirm password"}
                  type={"password"}
                  justHide={"cursor-pointer"}
                  containerClass={"absolute top-[40rem] left-[30.5rem]"}
                  placeholder={"xxxxxxxxxxx"}
                />
                <ParagraphAccess />
                <button
                  className="bg-custom-purplish-blue mt-4 w-full px-2 py-3 rounded-lg text-white shadow-custom mb-4"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <>
              <form className="mt-10">
                <InputsLabel
                  value={userName}
                  handleChange={handleUserName}
                  label={"Name"}
                  type={"text"}
                  placeholder={"Full name"}
                  justHide={"hidden"}
                />
                <InputsLabel
                  value={value}
                  handleChange={handleChange}
                  label={"Email"}
                  type={"email"}
                  justHide={"hidden"}
                  placeholder={"Your email address"}
                />

                <InputsLabel
                  value={passwordValue}
                  handleChange={handlePassword}
                  label={"Password"}
                  type={"password"}
                  justHide={"cursor-pointer"}
                  containerClass={"absolute top-[32.5rem] left-[30.5rem]"}
                  placeholder={"xxxxxxxxxxx"}
                />
                <InputsLabel
                  value={confirmPassword}
                  handleChange={handleConfirmPassword}
                  label={"Confirm Password"}
                  type={"password"}
                  justHide={"cursor-pointer"}
                  containerClass={"absolute top-[37.5rem] left-[30.5rem]"}
                  placeholder={"xxxxxxxxxxx"}
                />
                <ParagraphAccess />
                <Link to={"/account"}>
                  <button
                    className="bg-custom-purplish-blue mt-4 w-full px-2 py-3 rounded-lg text-white shadow-custom mb-4"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </Link>
              </form>
            </>
          )}
        </>
      ) : (
        <>
          <form className="mt-10">
            <InputsLabel
              value={userName}
              handleChange={handleUserName}
              label={"Name"}
              type={"text"}
              placeholder={"Full name"}
              justHide={"hidden"}
            />
            <InputsLabel
              value={value}
              handleChange={handleChange}
              label={"Email"}
              type={"email"}
              justHide={"hidden"}
              placeholder={"Your email address"}
            />

            <InputsLabel
              value={passwordValue}
              handleChange={handlePassword}
              label={"Password"}
              containerClass={"absolute top-[32.3rem] left-[30.5rem]"}
              type={"password"}
              justHide={"cursor-pointer"}
              placeholder={"xxxxxxxxxxx"}
            />
            <InputsLabel
              value={confirmPassword}
              handleChange={handleConfirmPassword}
              label={"Confirm Password"}
              type={"password"}
              justHide={"cursor-pointer"}
              containerClass={"absolute top-[37.5rem] left-[30.5rem]"}
              placeholder={"xxxxxxxxxxx"}
            />
            <ParagraphAccess />
              <button
                type="submit"
                className="bg-custom-purplish-blue mt-4 w-full px-2 py-3 rounded-lg text-white shadow-custom mb-4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            
          </form>
        </>
      )}
    </>
  );
}
