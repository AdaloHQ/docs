import React from 'react'

import { Redirect } from '@docusaurus/router'
import useBaseUrl from '@docusaurus/useBaseUrl'

function Home() {
  return <Redirect to={useBaseUrl('/create-new-adalo-component')} />
}

export default Home
