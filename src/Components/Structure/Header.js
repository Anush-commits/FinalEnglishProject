import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown';
import HomeIcon from '../../Images/home-run.svg'
export default function Header() {
    const data = [
        { 'level': 'Beginner', 'id': 'a1' },
        { 'level': 'Intermediate', 'id': 'a2' },
        { 'level': 'Upper-Intermediate', 'id': 'a3' },
        { 'level': 'Advanced', 'id': 'a4' }
    ]
    return (
        <header>
            <nav className='App-header'>
                <ul className='nav-links'>
                    <NavLink to='/'> <img id='homeicon' src={HomeIcon} />  </NavLink>
                    <NavLink to='/Grammar' activeStyle={{ color: '#00adb5' }}> <li>Grammar <span className="material-icons">expand_more</span> </li> </NavLink>
                    <NavLink to='/Vocabulary' activeStyle={{ color: '#00adb5' }}> <li>Vocabulary <span className="material-icons">expand_more</span> </li>  </NavLink>
                    <NavLink to='/Phrases' activeStyle={{ color: '#00adb5' }}> <li>Phrases <span className="material-icons">expand_more</span> </li>  </NavLink>
                    <NavLink to='/Pronunciation' activeStyle={{ color: '#00adb5' }}> <li>Pronunciation <span className="material-icons">expand_more</span> </li>  </NavLink>
                </ul>  
            </nav>   
            <ul className='dropdown'>
                <li>Link... </li>
                <li>Link... </li>
                <li>Link... </li>
                <li>Link... </li>
            </ul>
            </header>
    )
}
