import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Layout from '../components/layout'

const Thought = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsThought.edges.map(({ node: thought }) => (
        <div key={thought.id} className="showcase__thought">
          <Link
            to={`/thoughts/${thought.slug}`}
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <figure className="card">
              <figcaption className="card__caption">
                <h6 className="card__title">{thought.cardTitle}</h6>
                <div className="card__description">
                  <p>{thought.cardExcerpt}</p>
                </div>
                <div className="card__date">
                  <p>Published: {thought.datePublished}</p>
                </div>
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </Masonry>
  </Layout>
)

export default Thought

export const query = graphql`
  query ThoughtsQuery {
    allDatoCmsThought(sort: { fields: [position], order: DESC }) {
      edges {
        node {
          id
          cardTitle
          slug
          cardExcerpt
          datePublished
        }
      }
    }
  }
`
