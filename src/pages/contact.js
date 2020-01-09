import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from '../components/layout'

const Contact = ({ data: { contact } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={contact.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{contact.pageTitle}</h1>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: contact.pageTextNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Contact

export const query = graphql`
  query ContactQuery {
    contact: datoCmsContactInfo {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      pageTitle
      pageTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
