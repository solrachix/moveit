import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  /* background: ${props => props.theme.colors.background.light}; */

  z-index: 2;
  overflow: hidden;

  .ellipse {
    position: absolute;
    /* top: -1200px; */
    left: 50%;
    transform: translate(-50%, -60%);
    /* width: 100vw;
    height: 100vh; */

    z-index: -1;
  }

  .test {
    position: absolute;
    width: 200vw;
    height: 130vh;

    background: ${props => props.theme.colors.green};
    clip-path: circle(50% at 50% 0%);
    transform: translateX(-25%);

    z-index: -1;
  }

  main {
    width: 100%;
    max-width: 1100px;
    margin: auto;

    header {
      width: 100%;
      height: 4rem;
      padding: 0 2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        font-size: 1rem;
        font-weight: 900;

        color: ${props => props.theme.colors.background.normal};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        img {
          width: 2rem;
        }
      }

      .button {
        width: 8rem;
        height: 2.2rem;

        /* background: ${props => props.theme.colors.background.light};
        color: ${props => props.theme.colors.text.normal}; */
        background: ${props => rgba(props.theme.colors.primary.normal, 1)};
        color: ${props => props.theme.colors.white};
        border-radius: 10px;
        border: none;

        font-weight: 700;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    section {
      width: 100%;
      padding: 1rem;

      color: ${props => props.theme.colors.white};

      display: flex;
      flex-direction: column;
      align-items: center;

      &:nth-of-type(1) {
        .title {
          width: 100%;
          max-width: 600px;
          margin-top: 2rem;

          color: ${props => props.theme.colors.white};

          font-weight: 600;
          font-size: 2.6rem;
          text-align: center;
        }

        p {
          width: 100%;
          max-width: 600px;
          margin-top: 1rem;

          opacity: 0.8;

          font-weight: 400;
          font-size: 0.9rem;
          text-align: center;
        }

        button {
          width: 14rem;
          height: 3rem;
          margin-top: 1.2rem;

          background: ${props => rgba(props.theme.colors.primary.normal, 1)};
          color: ${props => props.theme.colors.white};
          /* border: 2px solid ${props => props.theme.colors.primary.dark}; */
          border-radius: 10px;
          border: none;

          font-weight: 600;
          font-size: 1.2rem;
          text-transform: uppercase;
        }

        .dashboard-full {
          width: 100%;
          height: 50vw;
          transform: translateY(-14%);
          /* margin-top: -6%; */

          filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));
          background: url('/images/dashboard-full.svg') no-repeat center;
          background-size: contain;

          z-index: -1;

          &:after {
            content: '';
            position: absolute;
            right: -1%;
            /* bottom: 0; */
            width: 50%;
            height: 50vh;
            margin-top: 24%;

            clip-path: polygon(100% 0, 0 100%, 100% 100%);

            background: ${props =>
              rgba(props.theme.colors.background.light, 0.1)};
            backdrop-filter: blur(4px);
          }
        }
      }

      &:nth-of-type(2) {
        .title {
          width: 100%;
          max-width: 600px;
          margin-top: 2rem;

          color: ${props => props.theme.colors.green};

          font-weight: 500;
          font-size: 2.2rem;
          text-align: center;
        }

        .technologies {
          width: 100%;
          max-width: 1100px;
          max-height: 10rem;

          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 100%;
          justify-content: center;
          align-items: center;
          gap: 3rem;

          img {
            width: 100%;
            height: 100%;
            margin-top: 2rem;

            opacity: 0.4;
            object-fit: contain;
          }
        }

        .benefits {
          width: 100%;
          margin-top: 6rem;

          display: flex;
          flex-flow: wrap;
          justify-content: center;
          align-items: start;
          gap: 2.5em;

          img {
            width: 50%;

            object-fit: contain;
          }

          div {
            width: 46%;
            max-width: 400px;

            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;

            .title {
              font-weight: bold;
              text-align: left;
            }
            p {
              margin-top: 1rem;

              opacity: 0.4;

              font-size: 0.9rem;
              line-height: 1.2rem;
            }

            ul {
              width: 100%;
              margin-top: 2rem;

              list-style: none;

              li {
                width: 100%;
                margin-bottom: 2rem;

                display: grid;
                grid-template-columns: 20% 80%;
                grid-template-rows: auto;
                grid-template-areas:
                  'image title'
                  'image description';
                align-items: center;
                gap: 0.2rem 0.2rem;

                .icon {
                  grid-area: image;
                  width: 50px;
                  height: 50px;
                  /* margin: auto; */
                  padding: 0.6rem;

                  border-radius: 50%;

                  /* filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3)); */
                  /* background: url('/images/dashboard-full.svg') no-repeat center; */
                  background-repeat: no-repeat;
                  background-size: contain;
                  background-position: center center;

                  &.purple {
                    background-color: ${props => props.theme.colors.purple};

                    &:before {
                      background: linear-gradient(
                        45deg,
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props => rgba(props.theme.colors.purple, 0.6)}
                      );
                    }
                  }
                  &.blue {
                    background-color: ${props => props.theme.colors.blue};

                    &:before {
                      background: linear-gradient(
                        45deg,
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props => rgba(props.theme.colors.blue, 0.6)}
                      );
                    }
                  }
                  &.green {
                    background-color: ${props => props.theme.colors.green};

                    &:before {
                      background: linear-gradient(
                        45deg,
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props =>
                          rgba(props.theme.colors.background.light, 0.1)},
                        ${props => rgba(props.theme.colors.green, 0.6)}
                      );
                    }
                  }
                  &:before {
                    content: '';
                    position: absolute;
                    /* right: 0; */
                    /* bottom: 0; */
                    width: 50px;
                    height: 50px;
                    /* margin-top: 4%; */
                    margin-left: -3%;
                    transform: translateY(30%);

                    backdrop-filter: blur(4px);
                    border-radius: 50%;
                  }
                }

                h3 {
                  grid-area: title;

                  color: ${props => props.theme.colors.red};
                }
                p {
                  grid-area: description;
                  margin-top: 0rem;

                  font-size: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    .ellipse {
      transform: translate(-50%, -72%);
    }
    main {
      section {
        &:nth-of-type(1) {
          .dashboard-full {
            margin-top: 10%;
          }
        }

        &:nth-of-type(2) {
          .benefits {
            & > div,
            & > img {
              width: 100%;
            }
          }
        }
      }
    }
  }
`
