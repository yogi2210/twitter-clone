import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export const Navbar = () => {
    const [ user ] = useAuthState(auth)
  return (
    <div className='navbar' >
        <div className='navbar-links' >

        <Link className='link-component' to='/' > Home </Link>
        <Link className='link-component'  to='/login' > Login </Link>
        </div>

        <div className='navbar-user-info' >
            <p>{user?.displayName}</p>
            <img src= {user?.photoURL || "img"} width='100' height='100' alt=""/>
        </div>

    </div>
  )
}
