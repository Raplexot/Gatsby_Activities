import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/header.css"
import  Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image';  

export default function IndexPage() {

  return (
    <Layout>
    <section className='header'>
      <div>
        <h2>First project on Gatsby</h2>
        <h3>Hope it will be great</h3>
        <Link className="button" to='/activities'>Check this out</Link>
      </div>
        <img src='/banner.svg' alt="banner" className="picture"/>
    </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}
`

