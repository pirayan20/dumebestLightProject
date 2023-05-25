import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Howto from '../components/Howto'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DumbestLightEverMade</title>
      </Head>
    <Main />
    <Howto />
    <About />
    <Skills />
    </div>
  )
}
