import { useRouter } from 'next/router'

import { Container } from '@/styles/pages/Moveit'

function Moveit() {
  const router = useRouter()

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1])

  const link = searchParams.get('url')

  if (!link) return <h1>aaa</h1>

  const linkURL = new URL(link)
  const user = searchParams.get('user')

  return (
    <Container>
      <div className="column">
        <header>2</header>

        <strong>Avancei para o próximo level</strong>
      </div>

      <div className="column">
        <main>
          <div>
            <h3>DESAFIOS</h3>
            <h1>
              <b>3</b> completados
            </h1>
          </div>

          <div>
            <h3>EXPERIÊNCIAS</h3>
            <h1>
              <b>150000</b> xp
            </h1>
          </div>
        </main>

        <img src="/images/logo-full.svg" />
      </div>
    </Container>
  )
}

export default Moveit
