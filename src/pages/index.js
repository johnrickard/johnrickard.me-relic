import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    {/* About */}
    <div className="container__about">
      <div className="about__wrapper">
        <div className="about__image">
          <Img fluid={data.datoCmsHome.aboutImage.fluid} />
        </div>
        <div className="about__top-title">{data.datoCmsHome.aboutTopTitle}</div>
        <div className="about__top-text">{data.datoCmsHome.aboutTopText}</div>
        <div className="about__header">{data.datoCmsHome.aboutHeader}</div>
        <div className="about__text">{data.datoCmsHome.aboutText}</div>
      </div>
    </div>
    {/* Portfolio */}
    <div className="container__showcase">
      <div className="showcase__wrapper">
        <Link id="portfolio" />
        <div className="showcase__header">
          {data.datoCmsHome.portfolioTitle}
        </div>
        <Masonry className="showcase">
          {data.allDatoCmsWork.edges.map(({ node: work }) => (
            <div key={work.id} className="showcase__item">
              <Link to={`/works/${work.slug}`} className="card__image">
                <figure className="card">
                  {work.coverImage && (
                    <Img fluid={work.coverImage.fluid} />
                  )}
                  <figcaption className="card__caption">
                    {work.title && (
                      <h1 className="card__title">{work.title}</h1>
                    )}
                    {work.excerpt && (
                      <div className="card__description">
                        <p>{work.excerpt}</p>
                      </div>
                    )}
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      aboutImage {
        fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      aboutTopTitle
      aboutTopText
      aboutHeader
      aboutText
      portfolioTitle
    }
    allDatoCmsWork(sort: { fields: [position], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
