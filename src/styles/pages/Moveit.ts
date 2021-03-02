import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 1200px;
  height: 630px;
  margin: auto;
  padding: 2rem 4rem;

  background: #fff;

  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 100%;
  align-items: center;

  .column {
    display: flex;
    flex-direction: column;

    &:nth-of-type(1) {
      width: 408px;
      height: 427px;
      margin: auto;

      justify-content: space-between;
      align-items: center;

      header {
        width: 90%;
        line-height: 262.3px;
        font-size: 306.06px;
        font-weight: 900;

        background: url('/icons/levelup.svg') no-repeat center;
        background-size: contain;
        color: ${props => props.theme.colors.primary.normal};

        display: flex;
        justify-content: center;
        align-items: center;
      }

      strong {
        line-height: 66px;
        text-align: center;
        font-weight: 600;

        font-size: 56px;
        color: ${'#666666'};
      }
    }

    &:nth-of-type(2) {
      width: 342px;
      height: 404px;

      justify-content: space-between;
      align-items: flex-start;

      main {
        width: 100%;

        img {
          width: 150px;
        }
        div {
          width: 100%;
          padding-bottom: 30px;
          /* height: 135px; */
          &:not(:last-of-type) {
            margin-bottom: 30px;
          }

          border-bottom: 1.5px solid #dcdde0;

          h1,
          h3,
          b {
            font-weight: 500;
          }
          h3 {
            font-size: 24px;

            color: ${rgba('#666666', 0.5)};
          }
          h1 {
            font-size: 40px;
            margin-top: 11px;

            color: ${'#666666'};
            b {
              color: ${props => props.theme.colors.primary.normal};
            }
          }
        }
      }
    }
  }
`
