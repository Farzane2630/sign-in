import React from "react";
import './Modal.css'
export default class Modal extends React.Component {

    render(){

        return (
            <div className="container">
               {this.props.children}
            </div>
        )

    }
}