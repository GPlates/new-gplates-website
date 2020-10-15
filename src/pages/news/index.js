import React from 'react'

import Layout from '../../components/Layout'
import NewsList from '../../components/NewsList'
import bgImg from '../../img/topo_1200x600.png'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        
          <h1
            className="has-text-weight-bold is-size-1 gp-title">
            News
          </h1>
         
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
