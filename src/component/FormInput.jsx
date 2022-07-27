import React, { useEffect, useRef, useContext } from "react";
import { FormContext } from "../App";
// 재활용이 가능한 form input 태그
// useEffct , useRef 훅 사용하기!!
// useEffct() : 렌더링 작업 데이터가져오기 api 호출시에 많이 사용되는 훅이다.
// useRef() : 자바스크립트 처럼 돔에 직접적으로 접근하여 조작하는 방식이다
// FormContext : {formData , setFormData}

// 유효성 검사 로직
const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const ERROR_TEXT = {
  required: "필수 정보입니다.",
  invalidId: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidPwCheck: "비밀번호가 일치하지 않습니다.",
};

const FormInput = ({ id, label, inputPorps, error, setError }) => {
  // Hook
  const inputRef = useRef(null);
  const { formData, setFormData } = useContext(FormContext);

  // 3. 커스텀 에러 메시지
  const checkRegex = (inputId) => {
    // retunr 해주지말고 erorr 저장해주기 위해 result 라는 변수에 저장하여 사용한다
    let result;
    const value = formData[inputId];
    if (value.length === 0) {
      result = "required";
    } else {
      switch (inputId) {
        case "id":
          result = ID_REGEX.test(value) ? true : "invalidId";
          break;
        case "pw":
          result = PW_REGEX.test(value) ? true : "invalidPw";
          checkRegex("confirmPw");
          break;
        case "confirmPw":
          result = value === formData["pw"] ? true : "invalidPwCheck";
          break;
        default:
          return;
      }
    }
    // react 에서는 setState 를 비동기적으로 실행한다
    // A->B(1차) 발생
    // B->C(2차)
    // 해결은 setState에 함수를 넘겨준다
    setError((item) => ({ ...item, [inputId]: result }));
  };

  useEffect(() => {
    // input.focus
    if (id === "id") {
      // 돔처럼 제어를 할 수 있다.
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          style={{ color: "blue" }}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          id={id}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          ref={inputRef} // useRef() ref라는 속성에 넣어준다
          // 유효성검사
          value={formData[id]}
          onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
          // onBlur focus을 잃었을때 발생
          onBlur={() => checkRegex(id)}
          {...inputPorps}
        />
        {/* error text  */}
        <div className="mt-1 mb-3 text-xs text-red-500">
          {error[id] !== true ? ERROR_TEXT[error[id]] : ""}
        </div>
      </div>
    </div>
  );
};

export default FormInput;
