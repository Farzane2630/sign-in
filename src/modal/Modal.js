import React from "react";
import './Modal.css'
import propTypes from 'prop-types'


export default class Modal extends React.Component {
    constructor (props){
        super(props)

<<<<<<< HEAD
    state ={
        emailValue: "",
        passwordValue: "",
    }

    emailChangeHandler (event){
        this.setState({emailValue : event.target.value})
    }
    passwordChangeHandler (event){
        this.setState({passwordValue : event.target.value})
    }    
=======
        this.state = {
            emailInputValue: "",
            passwordInputValue: "",
        }
    }


    emailChangeHandler(e){
        console.log(e.target.value);
       this.setState({emailInputValue: e.target.value}) 
    }

    passwordChangeHandler(e){
        console.log(e.target.value);
        this.setState({passwordInputValue: e.target.value})
    }
>>>>>>> 049612078f82c4d9067c166d142ee0bba9ea152a
    render(){

        return (
            <div className="container">
               <div className="header">
                    <h2> {this.props.title} </h2>
                    <img src="./cancel.png" alt="Cancel"></img>
                    </div>
                    <div className='br'></div>
<<<<<<< HEAD
                    <input className="email" placeholder= {this.props.mail} type="email" value={this.state.emailValue} onChange={(event)=> this.emailChangeHandler(event)}></input>
                    <input className="Password" placeholder= {this.props.pass} type="password" value={this.state.passwordValue} onChange={(event)=> this.passwordChangeHandler(event)}></input>
=======
                    <input className="email" placeholder= {this.props.mail} type="email" value={this.state.emailInputValue} onChange={e => this.emailChangeHandler(e)}></input>
                    <input className="Password" placeholder= {this.props.pass} type="password" value={this.state.passwordInputValue} onChange={e => this.passwordChangeHandler(e)}></input>
>>>>>>> 049612078f82c4d9067c166d142ee0bba9ea152a
                    <p className="pass-recovery"> {this.props.massage} </p>
                    <button className="login"> {this.props.button} </button>
                    <div className='br'></div>
                    <p className="sign-in"> {this.props.postmassage} </p>
            </div>
        )

    }
}

Modal.propTypes = {
    massage : propTypes.string.isRequired
}