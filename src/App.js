import logo from './logo.svg';
import './App.css';
import Modal from './modal/Modal';

function App() {

  const modalData = {
    title: "Log in", 
    massage: " Have you forget your Password?", 
    postmassage: "Already have an account? Sign-in",
    pass: "Password",
    mail: "E-mail"
  }
  return (
    
      <Modal {...modalData}>
    </Modal>
   
  );
}

export default App;
