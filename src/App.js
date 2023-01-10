import logo from './logo.svg';
import './App.css';
import Modal from './modal/Modal';

function App() {
  return (
    
      <Modal>
      <div className="header">
        <h2> Log in </h2>
        <img src="./cancel.png" alt="Cancel"></img>
        </div>
        <div className='br'></div>
        <input className="email" placeholder="E-mail" type="email"></input>
        <input className="Password" placeholder="Password" type="password"></input>
        <p className="pass-recovery"> Forget your password? </p>
        <button className="login"> Login </button>
        <div className='br'></div>
        <p className="sign-in">Already have an account? Sign up </p>
    </Modal>
   
  );
}

export default App;
