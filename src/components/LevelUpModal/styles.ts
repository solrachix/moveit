import styled from 'styled-components'
import { rgba } from 'polished'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0px;

  background: ${props => rgba(props.theme.colors.background.light, 0.4)};
  backdrop-filter: blur(6px);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 2rem 4rem;

  background: ${props => props.theme.colors.background.light};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
  text-align: center;

  header {
    font-size: 8.75rem;
    font-weight: 600;

    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
    color: ${props => props.theme.colors.primary.normal};
  }

  strong {
    margin-top: 0.25rem;

    font-size: 2.25rem;
    color: ${props => props.theme.colors.text.normal};
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    border: none;
    background: transparent;

    font-size: 0px;
  }
`
