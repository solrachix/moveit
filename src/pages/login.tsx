import { ReactElement, useEffect } from 'react'

import { signIn, signOut, useSession } from 'next-auth/client'

import { Container, Form } from '@/styles/pages/Login'
export default function Login(): ReactElement {
  const [session, loading] = useSession()

  function handleLogin() {
    signIn('github')
  }

  return (
    <Container>
      <Form>
        <img src="/logo-full.svg" />

        <div>
          <h2>Bem-vindo</h2>
          <span>
            <img src="/icons/github.svg" alt="github logo" />

            <p>Faça login com seu github para começar</p>
          </span>

          <button
            className="inputContainer"
            type="button"
            disabled={loading}
            onClick={handleLogin}
          >
            <div>{loading ? 'carregando...' : 'Entrar'}</div>
            <div>
              <img src="/icons/arrowRight.svg" alt="avançar" />
            </div>
          </button>
        </div>
      </Form>
    </Container>
  )
}
