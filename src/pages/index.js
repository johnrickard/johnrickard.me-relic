import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from '../components/layout'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Experience from '../components/experience'

const IndexPage = ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsHome.seoMetaTags} />
    <About />
    <Experience />
    <Portfolio />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
