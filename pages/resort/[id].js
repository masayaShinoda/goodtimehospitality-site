import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import Layout from '../../components/layout'

export default function Resort() {
    const router = useRouter()
    const {id} = router.query
    const pageId = id
    const token = '471202f89cdbcba570cb00dfa31609'
    const [resorts, setResorts] = useState((resorts) => {return null}); // by default there is no homepage data

    //generate an array of IDs
    useEffect(() => {
        fetch(
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
                    allResorts {
                        id
                        location
                        name
                        province
                        description
                        gallery {
                          alt
                          url
                        }
                      }
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setResorts(res.data["allResorts"])        
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])


    return (
        <Layout>
            {resorts && resorts.map(resort => {
                if(resort["id"] == pageId) {
                    return (
                        <>
                        <h1>{resort.name}</h1>
                        <p>{resort.province}</p>
                        </>
                    )
                }
            })}
            {id}
        </Layout>
    )
}