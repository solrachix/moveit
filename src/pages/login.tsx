import { ReactElement, useEffect } from 'react'

import { Container, Form } from '@/styles/pages/Login'
export default function Login(): ReactElement {
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

          <div className="inputContainer">
            <input type="text" placeholder="Username" />
            <button type="submit">
              <img src="/icons/arrowRight.svg" alt="avançar" />
            </button>
          </div>
        </div>
      </Form>
    </Container>
  )
}
