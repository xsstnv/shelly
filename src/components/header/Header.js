import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';


const Header = props => {

    const [path, setPath] = useState(window.location.pathname);
    console.log(path);
    return (
        <div className={classes.Header}>
            <Link to="/Shelly/" onClick={() => setPath('Homepage')} className={classes.Logo + ' ' + classes.Link}> Shelly </Link>
            <div className={classes.HeaderRight}>
                <Link to="/Shelly/shells" onClick={() => setPath('shells')} className={(window.location.pathname === '/Shelly/shells' ? classes.Active : '') + ' ' + classes.Link} > Shells </Link>
                <Link to="/Shelly/payloads" onClick={() => setPath('payloads')} className={(window.location.pathname === '/Shelly/payloads' ? classes.Active : '') + ' ' + classes.Link}> Payloads </Link>
            </div>
        </div>
    );    
}


export default Header;