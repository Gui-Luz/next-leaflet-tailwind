import Head from 'next/head'
import { MapScreen } from '../src/screens/MapScreen'

function Index() {

  return(
    <>
      <Head>
        <title>NEXT LEAFLET</title>
      </Head>
      <MapScreen />
    </>
  )
}

export default Index
