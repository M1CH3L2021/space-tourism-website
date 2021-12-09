import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Space Tourism</title>
      </Head>
      <Container>
        <div>
          <div>
            <span>So, you want to travel to</span>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <Link href="/destination">
            <button>
              Explore
            </button>
          </Link>
        </div>
      </Container>
    </>
  )
}