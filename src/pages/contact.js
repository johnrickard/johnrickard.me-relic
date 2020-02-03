import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from '../components/layout'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        <div className="contact__form">
          <Form
            name="Contact form"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="Contact form" />
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>

            <Form.Group controlId="formNumber">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" name="message" />
            </Form.Group>

            <div data-netlify-recaptcha="true"></div>

            <Button
              variant="primary"
              type="submit"
              style={{
                width: '8em',
                backgroundColor: 'black',
                marginTop: '40px',
              }}
            >
              SEND
            </Button>
          </Form>
        </div>
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
