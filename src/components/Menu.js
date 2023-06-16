import React from 'react'
import { Link } from 'react-router-dom'


const  Menu = () => {
  return (
    <>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/user/123'>User</Link></li>
            <li><Link  to='/Stopwatch'>Stopwatch</Link></li>
            <li><Link  to='/Counter'>Counter</Link></li>
            <li><Link to='/Product'>Product</Link></li>
          </ul>
        </nav>
    </>
  )
}

export default Menu