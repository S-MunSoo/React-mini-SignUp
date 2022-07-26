import "./App.css";
import Form from "./component/Form";
import Footer from "./component/Footer";
import FontControlBox from "./component/FontControlBox";
import Modal from "./component/Modal";

// 학습목표
// 1. form input태그 컴포넌트화
// 2. autofocus 기능 구현

function App() {
  return (
    <>
      <section className="form-wrapper">
        <Form />
        <Footer />
      </section>
      <FontControlBox />
      <Modal />
    </>
  );
}

export default App;
