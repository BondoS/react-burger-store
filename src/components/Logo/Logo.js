import React from 'react';
import burgerLogo from '../../assets/images/27.1 burger-logo.png.png'
import classes from './Logo.module.css'

const logo = (props) => (
  <div className={classes.Logo}>
    <img alt={"logo"} src={burgerLogo}/>
  </div>
);

export default logo;