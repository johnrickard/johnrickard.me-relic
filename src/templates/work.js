import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <div className="sheet__gallery">
          {data.datoCmsWork.coverImage && (
            <Img fluid={data.datoCmsWork.coverImage.fluid} />
          )}
        </div>
        <div style={{ marginBottom: '30px' }}>
          {data.datoCmsWork.title && (
            <h1 className="sheet__title" style={{ marginBottom: '10px' }}>
              {data.datoCmsWork.title}
            </h1>
          )}
          <div style={{ color: 'black' }}>
            {data.datoCmsWork.techHeader} {data.datoCmsWork.technologies}
          </div>
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
        <div style={{ textTransform: 'lowercase' }}>
          {data.datoCmsWork.tags}
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      title
      techHeader
      technologies
      excerpt
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      tags
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
