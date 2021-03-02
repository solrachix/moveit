import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  /* margin-top: 120px; */

  grid-area: footer;

  & > div {
    width: 94%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${props => props.theme.colors.secondary};
    padding: 40px 20px;

    .meta {
      color: ${props => props.theme.colors.text.normal};
      font-size: 16px;
      line-height: 26px;
    }

    .menu {
      display: flex;

      .nav {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        list-style: none;
        font-size: 16px;

        li {
          &:not(:last-child) {
            margin: 0 32px 0 0;
            padding: 0;
          }

          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            text-transform: lowercase;
            color: ${props => props.theme.colors.text.normal};

            svg {
              width: 20px;
              height: 20px;
              color: ${props => props.theme.colors.secondary};
              margin-right: 16px;
            }

            span {
              transition: all 0.2s ease;
            }
          }
        }
      }
    }

    @media (max-width: 1168px) {
      padding: 40px 20px;
    }
    @media (max-width: 1168px) {
      /* padding: 0 20px; */
    }
  }
`
