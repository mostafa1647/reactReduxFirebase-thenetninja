import React from "react";
import {NavLink, Link} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to={'/create'}>New Project</NavLink></li>
            <li><NavLink to={'/'}>Log Out</NavLink></li>
            <li><NavLink to={'/'} className={'btn btn-floating pink lighten-3'}>NN</NavLink></li>
        </ul>
    )
};


export default SignedInLinks;