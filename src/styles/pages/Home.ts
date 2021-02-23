import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  min-height: 100vh;
  margin-top: -30px;

  /* background: url('/gears.png');
  background-size: 120%;
  background-position: right; */

  .gears {
    position: absolute;
    right: 0%;
    width: 90vw;
    height: 130vh;

    object-fit: cover;
    z-index: -1;
  }

  main {
    flex: 1;
    width: 100%;

    section {
      width: 100%;
      height: 100vh;
    }
  }
`

export const SectionTitle = styled.div`
  width: 100%;
  max-width: 300px;
  height: 90%;
  margin-left: 3%;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 90% 10%;

  color: ${props => props.theme.colors.primary.normal};

  div {
    margin-top: 40%;
    p + p {
      margin-top: 10%;
    }
  }
`

export const Presentation = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 90%;

  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 100%;

  img {
    width: 100%;
  }

  div {
    width: 100%;
    height: 80%;
    margin: auto;

    .name {
      color: ${props => props.theme.colors.primary.normal};
    }

    svg {
      color: ${props => rgba(props.theme.colors.secondary, 0.6)};
      margin-right: 0.4rem;
    }

    p {
      color: ${props => props.theme.colors.text.light};
      margin-top: 0.8%;

      &:last-of-type {
        margin-top: 6%;
      }

      a {
        text-decoration: underline;
      }
    }

    b {
      width: 100%;
      max-width: 100px;
      margin-top: 2%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin-top: 0% !important;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .notebook {
      position: relative;
      right: -6%;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;

    div {
      margin: 0;
      padding: 1rem;
    }
  }
`

export const Calendar = styled.div`
  ${({ theme }) => css`
    --color-calendar-graph-day-bg: ${rgba(theme.colors.primary.normal, 0.1)};
    --color-calendar-graph-day-L1-bg: ${rgba(theme.colors.primary.normal, 0.3)};
    --color-calendar-graph-day-L2-bg: ${rgba(theme.colors.primary.normal, 0.5)};
    --color-calendar-graph-day-L3-bg: ${rgba(theme.colors.primary.normal, 0.8)};
    --color-calendar-graph-day-L4-bg: ${rgba(theme.colors.primary.normal, 1)};
    width: 80%;
    min-height: 243px;
    margin: 0 auto;

    font-family: 'Nunito', sans-serif, Helvetica, arial;
    text-align: center;

    /* border: 1px solid #DDDDDD; */
    border-radius: 5px;

    rect.ContributionCalendar-day[data-level='0'] {
      fill: var(--color-calendar-graph-day-bg);
    }

    rect.ContributionCalendar-day[data-level='1'] {
      fill: var(--color-calendar-graph-day-L1-bg);
    }

    rect.ContributionCalendar-day[data-level='2'] {
      fill: var(--color-calendar-graph-day-L2-bg);
    }

    rect.ContributionCalendar-day[data-level='3'] {
      fill: var(--color-calendar-graph-day-L3-bg);
    }

    rect.ContributionCalendar-day[data-level='4'] {
      fill: var(--color-calendar-graph-day-L4-bg);
    }

    text.ContributionCalendar-label {
      fill: ${theme.colors.text.normal};
      font-size: 11px;
      /* margin-right: 1rem; */
    }

    .width-full > .float-left {
      display: none;
    }
    .calendar-graph rect.day {
      shape-rendering: geometricPrecision;
      outline: 1px solid 10px;
      outline-offset: -1px;
      rx: 2;
      ry: 2;
    }

    .calendar-graph text.wday,
    .calendar-graph text.month {
      font-size: 10px;
      fill: ${theme.colors.text.light};
    }

    .contrib-legend {
      text-align: right;
      padding: 0 14px 10px 0;
      display: inline-block;
      float: right;
    }

    .contrib-legend .legend {
      display: inline-block;
      list-style: none;
      margin: 0 5px;
      position: relative;
      bottom: -1px;
      padding: 0;
    }

    .contrib-legend .legend li {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 2px;
    }

    .text-small {
      font-size: 12px;
      color: #767676;
    }

    .calendar-graph {
      padding: 5px 0 0;
      text-align: center;
    }

    .contrib-column {
      padding: 15px 0;
      text-align: center;
      border-left: 1px solid ${theme.colors.primary.normal};
      border-top: 1px solid ${theme.colors.primary.normal};
      font-size: 11px;
    }

    .contrib-column-first {
      border-left: 0;
    }

    .table-column {
      display: table-cell;
      width: 1%;
      padding-right: 10px;
      padding-left: 10px;
      vertical-align: top;
    }

    .contrib-number {
      font-weight: 800;
      line-height: 1.3em;
      font-size: 24px;
      display: block;
      color: ${theme.colors.primary.normal};
    }

    img.spinner {
      width: 70px;
      margin-top: 50px;
      min-height: 70px;
    }

    .monospace {
      text-align: center;
      color: #000;
      font-family: monospace;
    }

    .monospace a {
      color: #1d75ab;
      text-decoration: none;
    }

    .contrib-footer {
      font-size: 11px;
      padding: 0 10px 12px;
      text-align: left;
      width: 100%;
      box-sizing: border-box;
      height: 26px;
    }

    .left.text-muted {
      float: left;
      margin-left: 9px;
      color: #767676;
    }
    .left.text-muted a {
      color: #4078c0;
      text-decoration: none;
    }
    .left.text-muted a:hover,
    .monospace a:hover {
      text-decoration: underline;
    }

    h2.f4.text-normal.mb-3 {
      display: none;
    }

    .float-left.text-gray {
      float: left;
    }
    #user-activity-overview {
      display: none;
    }

    .day-tooltip {
      white-space: nowrap;
      position: absolute;
      z-index: 99999;
      padding: 10px;
      font-size: 12px;
      color: #959da5;
      text-align: center;
      background: rgba(0, 0, 0, 0.85);
      border-radius: 3px;
      display: none;
      pointer-events: none;
    }
    .day-tooltip strong {
      color: #dfe2e5;
    }
    .day-tooltip.is-visible {
      display: block;
    }
    .day-tooltip:after {
      position: absolute;
      bottom: -10px;
      left: 50%;
      width: 5px;
      height: 5px;
      box-sizing: border-box;
      margin: 0 0 0 -5px;
      content: " ";
      border: 5px solid transparent;
      border-top-color: rgba(0,0,0,.85)
    }   

  `}`
