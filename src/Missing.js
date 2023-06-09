import React from 'react'
import {NavLink } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page not Found</h2>
      <p>Well that is disappointing</p>
  <p>
    <NavLink to='/ '>Visit our Home Page</NavLink>
  </p>

    </main>
  )
}

export default Missing