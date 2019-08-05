import React, { Component } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

class Modal extends Component {
    shouldComponentUpdate (nextProps, nextState){
        return this.props.style !== nextProps.style
    }
    componentWillUpdate(){
        console.log('[Modal] will Update');
        
    }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.style} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.style ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.style ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
