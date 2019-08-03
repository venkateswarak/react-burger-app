import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';



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