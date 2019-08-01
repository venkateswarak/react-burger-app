import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'

const modal = (props) => (
    <Aux>

<Backdrop show={props.style} clicked={props.modalClosed}/>
<div className = {styles.Modal}
        style={{
            transform: props.style ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.style ? '1' : '0',
        }}>
            {props.children}
        </div>
    </Aux>

    )

export default modal;
