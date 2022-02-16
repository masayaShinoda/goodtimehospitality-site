import Layout from '../components/layout'
import Hero from '../components/hero'
import Offerings from '../components/offerings'

export default function Home({ herosData }) {

  return (
    <Layout>
      <Hero data={herosData.data.allHeros}/>
      <Offerings />
    </Layout>
  )
}

export async function getStaticProps() {
  const token = '471202f89cdbcba570cb00dfa31609'

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
      'https://graphql.datocms.com/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          query: `{ 
              allHeros {
                  id
                  image {
                    url
                    alt
                  }
                  heading
                  body
                  imagecaption
                  actionButtonOptional {
                      text
                      url
                  }
                }
            }`
        }),
      }
  )
  const herosData = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      herosData,
    },
  }
}
