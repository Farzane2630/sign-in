import React from "react";
import './Modal.css'
import propTypes from 'prop-types'


export default class Modal extends React.Component {

    render(){

        return (
            <div className="container">
               <div className="header">
                    <h2> {this.props.title} </h2>
                    <img src="./cancel.png" alt="Cancel"></img>
                    </div>
                    <div className='br'></div>
                    <input className="email" placeholder= {this.props.mail} type="email"></input>
                    <input className="Password" placeholder= {this.props.pass} type="password"></input>
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