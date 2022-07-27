import "./App.css";
import Form from "./component/Form";
import Footer from "./component/Footer";
import FontControlBox from "./component/FontControlBox";
import Modal from "./component/Modal";
import { useState } from "react";
// 1.contextAPI는  createContext를 불러와 사용한다.
import { createContext } from "react";

// 학습목표
// 1. form input태그 컴포넌트화
// 2. autofocus 기능 구현
// 3. 유효성 검사(벨리데이션)
// 4. contextAPI 사용으로 프롭드롤링 방지

// const [formState, dispatch] = useReducer(FormReducer, {
//   id: "",
//   pw: "",
//   confimPw: "",
// });

const initialFormData = {
  id: "",
  pw: "",
  confimPw: "",
};
// FormContext는 항상 export를 해줘야 다른 컴포넌트에서 사용이 가능하다.
export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
});

function App() {
  const [formData, setFormData] = useState(initialFormData);
  return (
    <>
      <FormContext.Provider value={{ formData, setFormData }}>
        <section className="form-wrapper">
          <Form />
          <Footer />
        </section>
        <FontControlBox />
        <Modal />
      </FormContext.Provider>
    </>
  );
}

export default App;
