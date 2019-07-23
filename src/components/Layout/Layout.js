import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

const layout = (props) => (
<Aux>
<div>ToggleBar, SideDrawer, Backdrop</div>
<main className = {styles.container}>
{props.children}
</main>
</Aux>

)

export default layout;