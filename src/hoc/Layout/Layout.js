import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



class Layout extends Component {
    state = {
        sideDrawer: false
    }
    sideDrawerHandler = () => {
        this.setState ((previousState) =>{
            return {sideDrawer : !previousState.sideDrawer}
        })
    }
render(){
    return(
    <Aux>
    <SideDrawer close = {this.sideDrawerHandler} show = {this.state.sideDrawer}/>
    <Toolbar clicked = {this.sideDrawerHandler}/>
    <main className = {styles.container}>
    {this.props.children}
    </main>
    </Aux>)

}
}

export default Layout;