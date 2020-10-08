import React from 'react'

import Layout from '../../components/Layout'
import NewsList from '../../components/NewsList'
import bgImg from '../../img/topo_1200x600.png'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 gp-title">
            News
          </h1>
          <div className="tint"></div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <NewsList />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
