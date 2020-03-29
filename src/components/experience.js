import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => {
  const [expandKeySkills, setExpandKeySkills] = useState(false)
  const [expandList, setExpandList] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query ExperienceQuery {
          datoCmsHome {
            expHeader
            expSubheader1
            expSubheader2
            expSubheader3
            expResumeUrl
          }
          allDatoCmsKeyskill {
            edges {
              node {
                id
                title
                text
              }
            }
          }
          allDatoCmsTechskill {
            edges {
              node {
                id
                title
                text
              }
            }
          }
        }
      `}
      render={data => (
        <div className="container__experience">
          <div className="experience__wrapper">
            <div className="experience__header">
              {data.datoCmsHome.expHeader}
            </div>
            <div
              className="experience__subheader"
              onClick={e => {
                e.preventDefault()
                setExpandKeySkills(!expandKeySkills)
              }}
            >
              <i class="fas fa-caret-right" /> {data.datoCmsHome.expSubheader1}
            </div>
            <div
              className="experience__skills"
              style={expandKeySkills ? null : { display: 'none' }}
            >
              <ul>
                {data.allDatoCmsKeyskill.edges.map(({ node: keyskill }) => (
                  <>
                    <li className="experience__skill-header">
                      {keyskill.title}
                    </li>
                    <li className="experience__skill-text">{keyskill.text}</li>
                  </>
                ))}
              </ul>
            </div>
            <div
              className="experience__subheader"
              onClick={e => {
                e.preventDefault()
                setExpandList(!expandList)
              }}
            >
              <i class="fas fa-caret-right" /> {data.datoCmsHome.expSubheader2}
            </div>
            <div
              className="experience__skills"
              style={expandList ? null : { display: 'none' }}
            >
              <ul>
                {data.allDatoCmsTechskill.edges.map(({ node: techskill }) => (
                  <>
                    <li className="experience__skill-header">
                      {techskill.title}
                    </li>
                    <li className="experience__skill-text">{techskill.text}</li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    />
  )
}
