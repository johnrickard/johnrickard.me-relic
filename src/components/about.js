import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        datoCmsHome {
          aboutTopTitle
          aboutTopText
          aboutText
          aboutImage {
            fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    `}
    render={data => (
      <div className="container__about">
        <div className="about__wrapper">
          <div className="about__image">
            <Img fluid={data.datoCmsHome.aboutImage.fluid} />
          </div>
          <div className="about__top-title">
            {data.datoCmsHome.aboutTopTitle}
          </div>
          <div className="about__top-text">{data.datoCmsHome.aboutTopText}</div>
          <div className="about__text">{data.datoCmsHome.aboutText}</div>
        </div>
      </div>
    )}
  />
)
