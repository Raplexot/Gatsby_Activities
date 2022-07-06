import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/global.css'
export default function Navbar() {
    const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
          siteMetadata {
            title
            description
          }
        }
      }`)
      const {title} = data.site.siteMetadata
  return (
  <nav>
    <h1>{title}</h1>
    <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/activities">Activities</Link>
    </div>
  </nav>
  )
}
