import { useRouter } from "next/router"
import { useEffect } from "react"


export async function getServerSideProps(context) {
  context.res.setHeader('location', 'https://partners.invuelto.com')
  context.res.statusCode = 302
  context.res.end()
  return {
    props: {}
  }
}
const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('https://partners.invuelto.com')
  }, [])

  return (
    <h1>Cargando...</h1>
  )
}

export default Home