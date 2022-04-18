import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="about" />
    <h1>About the Book of Changes</h1>
    <Link to="/">Go back to the book</Link>
  </Layout>
)

export default SecondPage
