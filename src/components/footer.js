import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

const Footer = _ => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          datoCmsFooter {
            header
            urlBottomIcon1
            urlBottomLink1
            urlBottomIcon2
            urlBottomLink2
            urlBottomIcon3
            urlBottomLink3
          }
        }
      `}
      render={data => (
        <div className="container__footer">
          <div className="footer__wrapper">
            <div className="footer__top-title"></div>
            <div
              className="footer__top-text"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <ul style={{ display: 'flex', float: 'right' }}>
                <li style={{ marginRight: '0.50em' }}>
                  <Link to="/">
                    <div className="menu__icon_user" />
                  </Link>
                </li>
                <li>
                  <Link to="/#portfolio">
                    <div className="menu__icon_briefcase" />
                  </Link>
                </li>
              </ul>
              <div>{data.datoCmsFooter.header}</div>
            </div>
            <hr />
            <ul className="footer__ul">
              <li>
                <Link to={data.datoCmsFooter.urlBottomLink1}>
                  <div className="footer__icon_social-email" />
                </Link>
              </li>
              <li>
                <a href={data.datoCmsFooter.urlBottomLink2}>
                  <div className="footer__icon_social-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    />
  )
}

export default Footer
