import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => {
    return (
        <div>
            <ul className={styles.NavigationItems}>
                <NavigationItem link='/' active>Burger Builder</NavigationItem>
                <NavigationItem link='/'>CheckOut</NavigationItem>
            </ul>
        </div>
    )
}

export default navigationItems
