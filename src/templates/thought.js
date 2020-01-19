import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        {data.datoCmsThought.coverImage ? (
          <div className="sheet__gallery sheet__gallery_shadow">
            <Img fluid={data.datoCmsThought.coverImage.fluid} />
          </div>
        ) : null}
        {data.datoCmsThought.title ? (
          <h1 className="sheet__title">{data.datoCmsThought.title}</h1>
        ) : null}
        {data.datoCmsThought.descriptionNode ? (
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html:
                data.datoCmsThought.descriptionNode.childMarkdownRemark.html,
            }}
          />
        ) : null}
        {data.datoCmsThought.datePublished ? (
          <p style={{ float: 'right' }}>{data.datoCmsThought.datePublished}</p>
        ) : null}
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query ThoughtQuery($slug: String!) {
    datoCmsThought(slug: { eq: $slug }) {
      title
      excerpt
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      datePublished
    }
  }
`
