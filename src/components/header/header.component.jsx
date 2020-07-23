import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

const header = ({currentUser}) =>(
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
        {currentUser ?
        (<div className='option' onClick={() => auth.signOut()}>SiGN OUT</div>) :
        (<Link className='option' to='/signin'> SIGN IN</Link>)
        }
      </div>
    </div>
)

export default header;