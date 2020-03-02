import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        datoCmsHome {
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
                fluid(
                  maxWidth: 450
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="container__showcase">
        <div className="showcase__wrapper">
          <Link id="portfolio" />
          <div className="showcase__header">
            {data.datoCmsHome.portfolioTitle}
          </div>
          <div className="showcase">
            {data.allDatoCmsWork.edges.map(({ node: work }) => (
              <div key={work.id} className="showcase__item">
                <Link to={`/works/${work.slug}`} className="card__image">
                  <figure className="card">
                    {work.coverImage && <Img fluid={work.coverImage.fluid} />}
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
          </div>
        </div>
      </div>
    )}
  />
)
