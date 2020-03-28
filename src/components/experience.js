import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query ExperienceQuery {
        datoCmsHome {
          expHeader
          expSubheader1
          expSubheader2
          expSubheader3
        }
      }
    `}
    render={data => (
      <div className="container__experience">
        <div className="experience__wrapper">
          <div className="experience__header">{data.datoCmsHome.expHeader}</div>
          <div className="experience__text">
            <i class="fas fa-caret-right" /> {data.datoCmsHome.expSubheader1}
          </div>
          <div className="experience__text">
            <i class="fas fa-caret-right" /> {data.datoCmsHome.expSubheader2}
          </div>
          <div className="experience__text" style={{ marginTop: '1em' }}>
            <i class="fas fa-external-link-alt" />{' '}
            {data.datoCmsHome.expSubheader3}
          </div>
        </div>
      </div>
    )}
  />
)
