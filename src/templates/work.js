import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <div className="sheet__gallery">
          {data.datoCmsWork.coverImage ? (
            <Img fluid={data.datoCmsWork.coverImage.fluid} />
          ) : null }
        </div>
        {data.datoCmsWork.title ? (
          <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        ) : null }
          <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
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
    }
  }
`
