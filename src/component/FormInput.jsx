import React, { useEffect, useRef } from "react";

const FormInput = ({ id, label, inputPorps }) => {
  // 재활용이 가능한 form input 태그
  // useEffct , useRef 훅 사용하기!!
  // useEffct() : 렌더링 작업 데이터가져오기 api 호출시에 많이 사용되는 훅이다.
  // useRef() : 자바스크립트 처럼 돔에 직접적으로 접근하여 조작하는 방식이다

  const inputRef = useRef(null);

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
          {...inputPorps}
        />
        {/* error text  */}
        <div className="mt-1 mb-3 text-xs text-red-500"></div>
      </div>
    </div>
  );
};

export default FormInput;
