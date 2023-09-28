import React from 'react'
import Layout from '~components/Layout/Layout'
import InteractiveHero from '~components/InteractiveHero/InteractiveHero'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout description="meta">
        <InteractiveHero
          tagline1={['Obladi', 'Oblada']}
          tagline2={['Obladi', 'Oblada']}
          tagline3={['Obladi', 'Oblada']}
          tagline4={['Obladi', 'Oblada']}
        />
      </Layout>
    )
  }
}

export default RootIndex
