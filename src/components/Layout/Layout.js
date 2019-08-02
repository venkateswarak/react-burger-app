import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';



const layout = (props) => (
<Aux>
<Toolbar/>
<div>ToggleBar, SideDrawer, Backdrop</div>
<main className = {styles.container}>
{props.children}
</main>
</Aux>

)

export default layout;