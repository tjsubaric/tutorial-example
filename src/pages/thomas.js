import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ThomasPage = () => {
  return (
    <Layout pageTitle="About Thomas">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default ThomasPage