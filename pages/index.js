import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Offerings from '../components/offerings'

export default function Home() {

  return (
    <Layout>
      <Hero />
      <Offerings />
    </Layout>
  )
}
