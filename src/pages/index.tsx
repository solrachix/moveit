import SEO from '@/components/SEO'

import { Container } from '@/styles/pages/Home'

import React from 'react'

const App: React.FC = () => {
  return (
    <Container>
      <SEO title="Inicio" />
      <img className="ellipse" src="/icons/ellipse.svg" />
      {/* <div className="test"></div> */}
      <main>
        <header>
          <div className="logo">
            <img src="/icons/logo.svg" />
            Move.it
          </div>

          <button type="button">Login</button>
        </header>

        <section>
          <h1 className="title">O melhor método de gerenciamento de tempo </h1>
          <p>
            Move.it é um projeto que combina a técnica pomodoro com alguns
            desafios para o bem-estar de quem passa muitas horas no computador
          </p>
          <button type="button">Iniciar</button>

          <div className="dashboard-full" />
        </section>

        <section>
          <h1 className="title">Tecnologias usadas</h1>
          <div className="technologies">
            <img src="/images/react-logo.png" />
            <img src="/images/next-logo.png" />
            <img src="/images/typescript-logo.png" />
          </div>

          <div className="benefits">
            <img src="/images/all-data.svg" />
            <div>
              <h1 className="title">
                O melhor método de gerenciamento de tempo{' '}
              </h1>
              <p>
                Move.it é um projeto que combina a técnica pomodoro com alguns
                desafios para o bem-estar de quem passa muitas horas no
                computador
              </p>

              <ul>
                <li>
                  <img className="purple" src="/icons/speedometer.svg" />
                  <h3>Gerenciar e controlar seu tempo</h3>
                  <p>
                    Com a técnica Pomodoro, você vai assumir o controle do seu
                    tempo.
                  </p>
                </li>
                <li>
                  <img className="blue" src="/icons/trophy.svg" />
                  <h3>Manter a motivação</h3>
                  <p>
                    Quando você se aproxima do final de um pomodoro e seu
                    trabalho está quase pronto, torna-se uma corrida emocionante
                    contra o relógio para terminar antes de esgotar o tempo.
                  </p>
                </li>
                <li>
                  <img className="green" src="/icons/walk.svg" />
                  <h3>É o processo, não o resultado</h3>
                  <p>
                    Outra grande vantagem da técnica Pomodoro é que ela mantém o
                    usuário focado na execução da tarefa ao invés do resultado.
                    Isso diminui bastante a ansiedade e reduz os níveis de
                    desistência.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Container>
  )
}
export default App
