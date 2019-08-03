import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'

const sideDrawer = (props) => {
    let attachClasses = [styles.SideDrawer, styles.Close];
    if (props.show){
        attachClasses = [styles.SideDrawer, styles.Open]
    }
    return (
        <Aux>
            <BackDrop show = {props.show} clicked = {props.close}/>
            <div className={attachClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav className={styles.NItems}>
                <NavigationItems />
                    
                </nav>
                
            </div>
        </Aux>
    )
}

export default sideDrawer
