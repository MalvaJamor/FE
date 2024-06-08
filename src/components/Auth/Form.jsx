"use client";
import { useState } from "react";
import InputsLabel from "./InputsLabel";

export default function Form() {
  const [value, setValue] = useState("");
  const [passwordValue, setPasswordValue] = useState('')
  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  }
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="mt-10">
      <InputsLabel
        value={value}
        handleChange={handleChange}
        label={"Email"}
        type={"email"}
        placeholder={"Your email address"}
      />

      <InputsLabel
        value={passwordValue}
        handleChange={handlePassword}
        label={"Password"}
        type={"password"}
        placeholder={"xxxxxxxxxxx"}
      />
    </form>
  );
}
