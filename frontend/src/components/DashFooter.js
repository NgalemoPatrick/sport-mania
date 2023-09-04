import { NavLink } from "react-router-dom";


import React from 'react'

const DashFooter = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'long'
    }).format(date)

    const content = (
        <section className="footer-dt">
            <p>{today}</p>
            <NavLink to='/dash/users'>Setting</NavLink>
        </section>
    )
  return content
}

export default DashFooter