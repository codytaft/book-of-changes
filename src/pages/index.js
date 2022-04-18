import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Sudo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Sudo />
    <h1>Hi people</h1>
    <p>Welcome to the Book of Changes.</p>
    <p>
      <Link to="/about/">About</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
