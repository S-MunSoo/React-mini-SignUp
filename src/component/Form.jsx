import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";

// errorText 초기값
const initialErrorData = {
  id: "",
  pw: "",
  confimPw: "",
};
const Form = () => {
  const [error, setError] = useState(initialErrorData);

  return (
    <div>
      <form
        id="form"
        className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        autoComplete="off"
      >
        <FormInput
          id={"id"}
          label={"아이디"}
          error={error}
          setError={setError}
          inputPorps={{
            type: "text",
            placeholder: "아이디를 입력해주세요.",
            autoFocus: true,
          }}
        />
        <FormInput
          id={"pw"}
          label={"비밀번호"}
          error={error}
          setError={setError}
          inputPorps={{
            type: "password",
            placeholder: "비밀번호를 입력해주세요.",
            autoComplete: "off",
          }}
        />
        <FormInput
          id={"confirmPw"}
          label={"비밀번호 확인"}
          error={error}
          setError={setError}
          inputPorps={{
            type: "password",
            placeholder: "비밀번호 확인을 입력해주세요.",
            autoComplete: "off",
          }}
        />
        <div className="flex items-center justify-center">
          <input
            id="submit"
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
            value="회원가입"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
