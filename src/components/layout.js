import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import '../styles/index.sass'
import '../fonts/fontawesome/css/all.min.css'

const TemplateWrapper = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
        }
      `}
      render={data => (
        <>
          <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
          <div className="container__body">{children}</div>
        </>
      )}
    />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
