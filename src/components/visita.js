import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

const Visita = _ => {
  return (
    <StaticQuery
      query={graphql`
        query VisitaQuery {
          datoCmsFooter {
            mobileExtraHeader
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
        <div className="footer__wrapper">
          <div className="footer__top-title">
            {data.datoCmsFooter.mobileExtraHeader}
          </div>
          <div className="footer__top-text">{data.datoCmsFooter.header}</div>
          <hr />
          <ul className="footer__ul">
            <li>
              <a href={data.datoCmsFooter.urlBottomLink1}>
                <div className="footer__icon_social-email" />
              </a>
            </li>
            <li>
              <a href={data.datoCmsFooter.urlBottomLink2}>
                <div className="footer__icon_social-github" />
              </a>
            </li>
            <li>
              <a href={data.datoCmsFooter.urlBottomLink3}>
                <div className="footer__icon_social-thoughts" />
              </a>
            </li>
          </ul>
        </div>
      )}
    />
  )
}

export default Visita
