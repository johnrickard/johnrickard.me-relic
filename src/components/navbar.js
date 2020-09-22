import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        datoCmsNavbar {
          urlAboutButton
          urlPortfolioButton
          urlContactButton
        }
      }
    `}
    render={data => (
      <div className="container__navbar">
        <div className="navbar__button_holder">
          <Link to={data.datoCmsNavbar.urlAboutButton}>
            <div className="navbar__button">
              <i class="fas fa-user"></i>
            </div>
          </Link>
          <Link to={data.datoCmsNavbar.urlPortfolioButton}>
            <div className="navbar__button">
              <i class="fas fa-briefcase"></i>
            </div>
          </Link>
          <a href={data.datoCmsNavbar.urlContactButton}>
            <div className="navbar__button">
              <i class="fas fa-envelope"></i>
            </div>
          </a>
        </div>
      </div>
    )}
  />
)
