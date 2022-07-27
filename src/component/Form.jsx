import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";

// errorText 초기값
const initialErrorData = {
  id: "",
  pw: "",
  confimPw: "",
};
const Form = ({ modalRef }) => {
  const [error, setError] = useState(initialErrorData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // 유효 하면 모달 오픈 (입력조건이 모두 true 일때)
    // const isValid = Object.values(error).every((value) => value === true); //every 를 통해 value 값이 모두 true이면 true 하나라도 아니면 false
    // isValid && modalRef.current.showModal(); //19번째 줄이랑 20번째 줄은 똑같은 내용이다
    // console.log(isValid);
    // if (isValid === true) {
    //   modalRef.current.showModal();
    // }
    modalRef.current.showModal();
  };

  return (
    <form
      id="form"
      className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      autoComplete="off"
      onSubmit={onSubmitHandler}
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
  );
};

export default Form;
