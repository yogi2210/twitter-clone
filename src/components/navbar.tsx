import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export const Navbar = () => {
    const [ user ] = useAuthState(auth)

    const signUserOut = async () =>{
        await signOut(auth)
    }
  return (
    <div className='navbar' >
        <div className='navbar-links' >

        <Link className='link-component' to='/' > Home </Link>
        {
            !user ? 
                <Link className='link-component'  to='/login' > Login </Link> 
                :
                <Link className='link-component'  to='/createpost' > Create Post </Link>
        }       
        </div>

        <div className='navbar-user-info' >
            {user && 
            <>
            <p>{user?.displayName}</p>
            <img src= {user?.photoURL || "img"} width='100' height='100' alt=""/>
            <button onClick={signUserOut} >Log Out</button>
            </>
            }
        </div>

    </div>
  )
}
