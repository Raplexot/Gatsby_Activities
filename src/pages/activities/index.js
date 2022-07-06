import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import '../../styles/activities.css'
import { GatsbyImage } from 'gatsby-plugin-image';  

export default function activities({ data }) {
    const activities = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <div className='activities'>

                <h2>
                    Activities
                </h2>
                <h3>Here some links, where you can see some interesting activities</h3>
                <div className='activities-list'>
                    {activities.map(el => (
                        <Link to={'/activities' + el.frontmatter.slug} key={el.id}>
                            <div>
                                <GatsbyImage className='img' image={el.frontmatter.thumb.childImageSharp.gatsbyImageData} alt='project image'/>
                                <h3>{el.frontmatter.title}</h3>
                                <p>{el.frontmatter.popularity}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          popularity
          slug
          title
          thumb {
            childImageSharp {
            
                gatsbyImageData
              
            }
          }
        }
      }
    }
  }
  
  `
