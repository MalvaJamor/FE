"use client";
import { useState } from "react";
import InputsLabel from "./InputsLabel";
import IsEmpty from "./IsEmpty";
import ParagraphAccess from "./ParagraphAccess";
export default function Form() {
  const [value, setValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleSubmit = (e) => {
    setIsClicked(!isClicked);
    e.preventDefault();
    setIsEmpty(!isEmpty);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPasswordValue(e.target.value);
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
                  containerClass={"absolute top-[29.5rem] left-[30.5rem]"}
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
                  value={value}
                  handleChange={handleChange}
                  label={"Email"}
                  type={"email"}
                  justHide={"hidden"}
                  containerClass={"absolute top-[30rem] left-[36.5rem]"}
                  placeholder={"Your email address"}
                />

                <InputsLabel
                  value={passwordValue}
                  handleChange={handlePassword}
                  label={"Password"}
                  type={"password"}
                  justHide={"cursor-pointer"}
                  containerClass={"absolute top-[30rem] left-[36.5rem]"}
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
          )}
        </>
      ) : (
        <>
          <form className="mt-10">
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
              containerClass={"absolute top-[27rem] left-[30.5rem]"}
              type={"password"}
              justHide={"cursor-pointer"}
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
