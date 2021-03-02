import React, { ReactElement } from 'react'

import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { Container } from './styles'

const Footer = (): ReactElement => {
  const year = new Date().getFullYear()
  return (
    <Container>
      <div>
        <div className="meta">
          © {year} - Carlos Miguel. Todos os direitos reservados
          <br />
        </div>
        <div className="menu">
          <ul className="nav">
            <li>
              <a href="https://instagram.com/solrachix">
                <IoLogoInstagram />
                <span>instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/solrachix">
                <IoLogoGithub />
                <span>github</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/carlos.miguel">
                <IoLogoLinkedin />
                <span>linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Footer
