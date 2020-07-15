import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const header = () =>(
    <div className='header'>
      <Link to="/" >
        <Logo className='logo-container'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shops'>
        SHOP
        </Link>
        <Link className='option' to='/shops'>
        CONTACT
        </Link>
      </div>
    </div>
)

export default header;