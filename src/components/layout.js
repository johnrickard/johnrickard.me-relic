import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Footer from './footer'
import Visita from './visita'

import '../styles/index.sass'
import '../fonts/fontawesome/css/all.min.css'

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
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
          datoCmsFooter {
            mobileExtraHeader
            header
          }
        }
      `}
      render={data => (
        <div className={`container ${showMenu ? 'is-open' : ''}`}>
          <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
          {/* Contact mobile view */}
          <div className="container__footer-pop">
            <Visita />
          </div>
          <div className="container__body">
            {children}
            <Footer />
          </div>
          <div className="mobile-footer__divider"></div>
          <div className="mobile-footer__menu">
            <Link
              to="/"
              onClick={e => {
                if (showMenu) setShowMenu(!showMenu)
              }}
            >
              <div className="menu__icon_user" />
            </Link>
            <Link
              to="/#portfolio"
              onClick={e => {
                if (showMenu) setShowMenu(!showMenu)
              }}
            >
              <div className="menu__icon_briefcase" />
            </Link>
            <div
              onClick={e => {
                e.preventDefault()
                setShowMenu(!showMenu)
              }}
              className="menu__icon_contact"
            />
          </div>
        </div>
      )}
    />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
